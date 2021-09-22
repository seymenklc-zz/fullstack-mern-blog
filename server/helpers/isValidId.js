import mongoose from 'mongoose';

export const isValid = (id, res) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid ID.' });
    }
};