import express from 'express';
import { addPost, deletePost, getPosts, editPost } from '../controllers/postControllers.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/getPosts', auth, getPosts);
router.post('/createPost', addPost);
router.put('/:id', editPost);
router.delete('/:id', deletePost);

export default router;