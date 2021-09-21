import mongoose from 'mongoose';

const connectDB = async () => {
    const connectionString = process.env.CONNECTION_URL;
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true
        });
        console.log('Successfully connected to DB.');
    } catch (error) {
        console.log('DB Connection Failure.');
        throw error;
    }
};

export default connectDB;