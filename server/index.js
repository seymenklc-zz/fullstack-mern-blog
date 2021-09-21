import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

import connectDB from './config/databaseConnection.js';
import { corsOptions } from './config/corsConfig.js';

dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(cors(corsOptions));
connectDB();

// Routes
app.use('/api', postRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));