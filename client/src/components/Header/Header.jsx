import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import useTelegram from "../../hooks/useTelegram";

const Header = () => {
    const { user } = useTelegram();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{

                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Hello, {user?.username}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;