import React from 'react';

import { Link } from 'react-router-dom';

import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import useStyles from './styles';

import { URL } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { useCookie } from '../../hooks/useCookie';

import Post from './Post/Post';

const Home = () => {
    const classes = useStyles();
    const { cookie } = useCookie('jwt');
    const { data, loading, error } = useFetch(URL + '/getPosts');

    return (
        <Container className={classes.container} maxWidth='md'>
            {!cookie ? (
                <Typography variant='h6' align='center'>
                    You must be
                    <Link to='/login' className={classes.link}>
                        {' '}logged{' '}
                    </Link>
                    in to see posts.
                </Typography>
            ) : (
                !loading && !error ? (
                    data?.posts?.length !== 0 ? (
                        data?.posts?.map(post => (
                            <>
                                <Grid container key={post._id}>
                                    <Post
                                        id={post._id}
                                        body={post.body}
                                        title={post.title}
                                        image={post.image}
                                    />
                                </Grid>
                            </>
                        ))
                    ) : (
                        <Typography variant='h6' align='center'>
                            No posts to show,
                            <Link to='/createPost' className={classes.link}>
                                want to add one?
                            </Link>
                        </Typography>
                    )
                ) : <CircularProgress sx={{ ml: 50, mt: 30 }} />
            )}
        </Container>
    );
};

export default Home;
