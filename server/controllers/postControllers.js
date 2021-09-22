import { isValid } from "../helpers/isValidId.js";

import Post from "../models/Post.js";

export const getPosts = async (req, res, next) => {
    try {
        // Get all the posts from db.
        const posts = await Post.find();

        res.status(200).json({ posts });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getPostsById = async (req, res, next) => {
    try {
        const { id: _id } = req.params;

        // Check if the id is valid
        isValid(_id, res);

        const post = await Post.findById(_id);

        res.status(200).json({ post });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const addPost = async (req, res, next) => {
    try {
        const { body, title, image } = req.body;

        const newPost = new Post({ title, body, image });

        await newPost.save();

        res.status(201).json({ message: 'Post created successfully.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const editPost = async (req, res, next) => {
    try {
        const { id: _id } = req.params;
        const post = req.body;

        // Check if the id is valid
        isValid(_id, res);

        const editedPost = await Post.findByIdAndUpdate(_id, post, { new: true });

        res.status(201).json({ editedPost, message: 'Post edited successfully.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletePost = async (req, res, next) => {
    try {
        const { id: _id } = req.params;

        // Check if the id is valid
        isValid(_id, res);

        await Post.findByIdAndRemove(_id);

        res.status(200).json({ message: 'Post deleted successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

