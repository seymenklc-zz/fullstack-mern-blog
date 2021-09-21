import React from 'react';

import { useHistory } from 'react-router';

import { SwipeableDrawer, Typography, Button, Divider } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import useStyles from './styles';

// Drawer Item Icons
const icons = [HomeRoundedIcon, AddBoxIcon, GroupAddRoundedIcon];

const Drawer = ({ toggleDrawer, setToggleDrawer }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <SwipeableDrawer
            anchor='left'
            className={classes.drawer}
            open={toggleDrawer}
            onOpen={() => setToggleDrawer(true)}
            onClose={() => setToggleDrawer(false)}
        >
            <Typography variant='h6' align='center' color='secondary' sx={{ mt: 2 }}>
                BLOG APP
            </Typography>
            <Divider />
            {['home', 'createPost', 'register'].map((selection, idx) => {
                const Icon = icons[idx];
                return (
                    <div className={classes.selectionContainer} key={idx}>
                        <Button
                            size='large'
                            color='primary'
                            className={classes.button}
                            onClick={() => history.push(`/${selection}`)}
                        >
                            <Icon className={classes.icon} />
                            <Typography>
                                {selection?.toUpperCase()}
                            </Typography>
                        </Button>
                    </div>
                );
            })}
            <Button size='large' onClick={() => setToggleDrawer(false)}>
                <KeyboardArrowLeftRoundedIcon />
            </Button>
        </SwipeableDrawer>
    );
};

export default Drawer;
