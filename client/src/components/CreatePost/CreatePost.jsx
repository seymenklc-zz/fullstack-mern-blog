import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Paper, Typography, } from '@mui/material';
import useStyles from './styles';

import { addPost } from '../../api';
import { useInput } from '../../hooks/useInput';
import { usePush } from '../../hooks/usePush';
import { useCookie } from '../../hooks/useCookie';

import Form from './PostForm/Form';

const CreatePost = () => {
    const classes = useStyles();
    const [image, setImage] = useState('');
    const { cookie } = useCookie('jwt');
    const { handlePush } = usePush('home', 1500);
    const [inputs, reset, setInputs] = useInput({ title: '', body: '' });

    const isFormEmpty = inputs.title && inputs.body && image.base64;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            title: inputs.title,
            body: inputs.body,
            image: image.base64
        };

        await addPost(newPost);

        reset();
    };

    return (
        !cookie ? (
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                You must be
                <Link to='/login' className={classes.link}>
                    {' '}logged{' '}
                </Link>
                in to create post.
            </Typography>
        ) : (
            <Container maxWidth='sm' className={classes.container}>
                <Paper className={classes.paper} elevation={10}>
                    <Form
                        handleSubmit={handleSubmit}
                        inputs={inputs}
                        setInputs={setInputs}
                        setImage={setImage}
                        image={image}
                        handlePush={handlePush}
                        isFormEmpty={isFormEmpty}
                    />
                </Paper>
            </Container >
        )
    );
};

export default CreatePost;
