import User from '../models/User.js';
import { createToken, maxAge } from '../helpers/createToken.js';
import { handleErrors } from '../helpers/handleErrors.js';

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists.' });

        // Create a new user
        user = new User({ username, email, password });
        const newUser = await user.save();

        // JWT
        const payload = {
            user: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        };

        const token = createToken(payload);

        res.status(201).json({ message: 'User created successfully.', token });
    } catch (error) {
        const errors = handleErrors(error);
        res.status(500).json({ errors });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Login user with static method 
        const user = await User.login(email, password);

        // JWT
        const payload = {
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        };

        const token = createToken(payload);

        res.clearCookie('jwt');
        res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
        res.status(200).json({ message: 'Login Success.', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
