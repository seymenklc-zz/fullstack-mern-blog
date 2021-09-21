import axios from 'axios';

export const URL = 'http://localhost:5000/api';

// Post requests
export const addPost = async (postData) => {
    try {
        await axios.post(`${URL}/createPost`, postData,
            {
                withCredentials: true,
                credentials: 'include',
            }
        );
    } catch (error) {
        throw error;
    }
};

export const editPost = async (postId, editedPostData) => {
    try {
        await axios.put(`${URL}/${postId}`, editedPostData);
    } catch (error) {
        throw error;
    }
};

export const deletePost = async (postId) => {
    try {
        await axios.delete(`${URL}/${postId}`);
    } catch (error) {
        throw error;
    }
};

// User Requests
export const loginUser = async (userData) => {
    try {
        await axios.post(`${URL}/login`, userData,
            {
                withCredentials: true,
                credentials: 'include',
            }
        );
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        await axios.post(`${URL}/register`, userData,
            {
                withCredentials: true,
                credentials: 'include'
            }
        );
    } catch (error) {
        throw error;
    }
};