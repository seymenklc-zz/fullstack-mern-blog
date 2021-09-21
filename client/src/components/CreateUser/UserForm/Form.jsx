import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import { Button, TextField, Typography, Avatar } from '@mui/material';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import useStyles from './styles';

import { useCookie } from '../../../hooks/useCookie';

const Form = ({ handleSubmit, pathNameCheck, inputs, setInputs, isDisabled }) => {
    const { cookie } = useCookie('jwt');
    const classes = useStyles();

    return (
        <>
            <div className={classes.avatar}>
                <Avatar style={{ backgroundColor: '#3492ca' }}>
                    {pathNameCheck ? <PersonRoundedIcon /> : <PersonAddRoundedIcon />}
                </Avatar>
            </div>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                {pathNameCheck ? null : (
                    <TextField
                        name='username'
                        label='Username'
                        value={inputs.username}
                        onChange={setInputs}
                        sx={{ pb: 2 }}
                        required
                        fullWidth
                    />
                )}
                <TextField
                    name='email'
                    label='Email'
                    value={inputs.email}
                    onChange={setInputs}
                    sx={{ pb: 2 }}
                    required
                    fullWidth
                />
                <TextField
                    name='password'
                    label='Password'
                    type='password'
                    value={inputs.password}
                    onChange={setInputs}
                    sx={{ pb: 2 }}
                    required
                    fullWidth
                />
                <div className={classes.button}>
                    <Button
                        type='submit'
                        variant='contained'
                        disabled={isDisabled}
                        fullWidth
                    >
                        {pathNameCheck ? 'Login' : 'Complete'}
                    </Button>
                </div>
                {!cookie && (
                    !pathNameCheck && (
                        <Typography sx={{ mt: 1 }} align='center' color='GrayText'>
                            Already have an account?
                            Login{' '}<Link className={classes.link} to='/login'>here</Link>
                        </Typography>
                    ))}
            </form>
        </>
    );
};

export default withRouter(Form);
