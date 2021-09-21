import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        // Check if the token exists or valid
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                if (err) {
                    console.log(err.message);
                    res.redirect('/home');
                } else {
                    next();
                }
            });
        } else res.redirect('/home');
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ message: 'Unauthorized' });
    }
};