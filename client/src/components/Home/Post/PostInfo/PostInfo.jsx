import React from 'react';

import { Typography } from '@mui/material';
import useStyles from './styles';

const PostInfo = ({ title, body }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.title}>
                <Typography variant='h5' color='primary'>
                    {title.toUpperCase()}
                </Typography>
            </div>
            <div className={classes.body}>
                <Typography variant='body1' color='GrayText'>
                    {body}
                </Typography>
            </div>
        </>
    );
};

export default PostInfo;
