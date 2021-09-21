import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const isValidEmail = validator.isEmail;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please, enter an username.'],
        minlength: [4, 'Minimum username length is 6 characters.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please, enter an email.'],
        lowercase: [true, 'Email must be lowercase.'],
        validate: [isValidEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Minimum password length is 6 characters.']
    }
});

// Hashing Password before saving user to the db
userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// static method to login user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);

        if (auth) {
            return user;
        }
        throw Error('Invalid credentials.');
    }
    throw Error('Invalid credentials.');
};

const User = mongoose.model('User', userSchema);

export default User;