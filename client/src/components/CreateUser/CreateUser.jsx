import React from 'react';

import { useLocation, withRouter } from 'react-router-dom';

import { Container, Paper, Typography } from '@mui/material';
import useStyles from './styles';

import { loginUser, registerUser } from '../../api';
import { refreshPage } from '../../utils/refreshPage';
import { useCookie } from '../../hooks/useCookie';
import { useInput } from '../../hooks/useInput';
import { usePush } from '../../hooks/usePush';

import Form from './UserForm/Form';

const CreateUser = () => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const { handlePush } = usePush();
    const { cookie } = useCookie('jwt');
    const [inputs, reset, setInputs] = useInput({ username: '', email: '', password: '' });

    const { username, email, password } = inputs;

    const isRegisterFormEmpty = username && email && password;
    const isLoginFormEmpty = email && password;

    const pathNameCheck = pathname === '/login';
    const isDisabled = pathNameCheck ?
        (isLoginFormEmpty ? false : true) : (isRegisterFormEmpty ? false : true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!pathNameCheck) {
                // Register User
                const userData = { username, email, password };

                await registerUser(userData);

                reset();
                handlePush('login', 1000);
            } else {
                // Login User
                const userData = { email, password };

                await loginUser(userData);

                reset();
                handlePush('home', 1000);
                refreshPage(1200);
            }
        } catch (error) {
            throw error;
        }
    };

    return (
        cookie ? (
            <Typography variant='h6' align='center' sx={{ mt: 4 }}>
                You must log out before creating a new account.
            </Typography>
        ) : (
            <Container className={classes.container} maxWidth='xs' >
                <Paper className={classes.paper} elevation={10}>
                    <Form
                        handleSubmit={handleSubmit}
                        pathNameCheck={pathNameCheck}
                        inputs={inputs}
                        setInputs={setInputs}
                        isDisabled={isDisabled}
                    />
                </Paper>
            </Container >
        )
    );
};

export default withRouter(CreateUser);
