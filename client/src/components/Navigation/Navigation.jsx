import React, { useState } from "react";

import jwt from 'jsonwebtoken';

import { AppBar, Button, IconButton, Toolbar, Typography, Box, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from "./styles";

import { usePush } from "../../hooks/usePush";
import { useCookie } from "../../hooks/useCookie";
import { refreshPage } from "../../utils/refreshPage";

import Drawer from "./Drawer/Drawer";

const Navigation = () => {
    const classes = useStyles();
    const { handlePush } = usePush();
    const { cookie } = useCookie('jwt');
    const [toggleDrawer, setToggleDrawer] = useState(false);

    // Decode the token for user data display
    const decodedToken = jwt.decode(cookie)?.user;

    const handleLogin = () => handlePush('login', 1000);

    const handleLogout = () => {
        // Delete JWT token
        document.cookie = 'jwt=; Max-Age=0; path=/; domain=';
        // Reload page after deleting token
        refreshPage(100);
    };

    return (
        <Container className={classes.container}>
            <Box className={classes.root}>
                <AppBar className={classes.appbar} position="static" elevation={0}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={classes.iconbutton}
                            onClick={() => setToggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.root}>
                            B L O G
                        </Typography>
                        <Button color="inherit" onClick={decodedToken ? null : handleLogin}>
                            {decodedToken ? decodedToken.username || null : 'Login'}
                        </Button>
                        {decodedToken ? (
                            <div className={classes.logoutButton}>
                                <Button onClick={handleLogout} color='primary'>
                                    Logout
                                </Button>
                            </div>
                        ) : null}
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
        </Container>
    );
};

export default Navigation;
