import React from 'react';

import { Button, Container, TextField, Typography } from '@mui/material';

const EditPost = ({ id, editPostValue, setEditPostValue, isEditing, setIsEditing, handleEditSave }) => {

    const { title, body } = editPostValue;
    const isFormEmpty = title && body;

    const handleChange = (e) => {
        setEditPostValue({ ...editPostValue, [e.target.name]: e.target.value });
    };

    return (
        <Container maxWidth='xs'>
            <Typography
                align='center'
                variant='h6'
                color='primary'
                sx={{ mb: -7, mt: -1 }}
            >
                Editing Post
            </Typography>
            <TextField
                name='title'
                sx={{ mb: 2, mt: 8 }}
                value={title}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                name='body'
                sx={{ mb: 2 }}
                rows={2}
                value={body}
                onChange={handleChange}
                multiline
                fullWidth
            />
            <Button
                sx={{ mb: 1 }}
                variant='contained'
                disabled={isFormEmpty ? false : true}
                onClick={() => handleEditSave(id)}
                fullWidth
            >
                Save
            </Button>
            <Button
                color='error'
                variant='contained'
                onClick={() => setIsEditing(!isEditing)}
                fullWidth
            >
                Close
            </Button>
        </Container>
    );
};

export default EditPost;
