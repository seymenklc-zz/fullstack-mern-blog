import React, { useState } from 'react';

import { Paper, Box, Grid } from '@mui/material';
import useStyles from './styles';

import { deletePost, editPost } from '../../../api';
import { refreshPage } from '../../../utils/refreshPage';

import PostInfo from './PostInfo/PostInfo';
import EditPost from './EditPostForm/EditPost';
import Buttons from './Buttons/Buttons';

const Post = ({ title, body, image, id }) => {
    const classes = useStyles();

    const [isEditing, setIsEditing] = useState(true);
    const [editPostValue, setEditPostValue] = useState({ title: '', body: '' });;

    const handleEditClick = (postId) => {
        setIsEditing(!isEditing);
        if (postId === id) setEditPostValue({ title, body });
    };

    const handleEditSave = async (id) => {
        const { title, body } = editPostValue;
        const editedPost = { title, body };

        await editPost(id, editedPost);

        refreshPage(120);
        setIsEditing(!isEditing);
        setEditPostValue({ title: '', body: '' });
    };

    const handleDelete = async (id) => {
        await deletePost(id);
        // Reload page after deleting post
        refreshPage(120);
    };

    return (
        <Grid item xs={12} md={12} sm={6} >
            <Paper className={classes.wrapper} elevation={8}>
                <Paper className={classes.imgWrapper} elevation={4}>
                    <img
                        src={image}
                        alt={title}
                        className={classes.img}
                    />
                </Paper>
                {isEditing ? (
                    <PostInfo
                        id={id}
                        title={title}
                        body={body}
                        isEditing={isEditing}
                        handleDelete={handleDelete}
                        handleEditClick={handleEditClick}
                    />
                ) : (

                    <EditPost
                        id={id}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        editPostValue={editPostValue}
                        setEditPostValue={setEditPostValue}
                        handleEditSave={handleEditSave}
                    />
                )}
                <Buttons
                    id={id}
                    isEditing={isEditing}
                    handleDelete={handleDelete}
                    handleEditClick={handleEditClick}
                />
            </Paper>
        </Grid>
    );
};

export default Post;
