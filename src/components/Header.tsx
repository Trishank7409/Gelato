import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';
import gelota_logo_black from '../assets/gelato_logo_black.svg';
import CustomDrawer from './CustomDrawer'; // Importing the new CustomDrawer component

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
//   const { drawerOpen, toggleDrawer } = useDrawer();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Items to be passed as props to the drawer
  const drawerItems = [
    { label: 'Contact us', icon: <HeadsetMicIcon /> },
    { label: 'IN/INR', icon: <LanguageIcon /> },
    { label: 'Cart', icon: <ShoppingCartIcon /> },
    { label: 'Sign in', icon: <AccountCircleIcon /> },
  ];


  return (
    <AppBar
      sx={{
        boxShadow: 'rgba(27, 31, 35, 0.14) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset',
        paddingLeft: '40px',
        paddingRight: '40px',
        background: 'white',
        width: '100vw',
      }}
      position="sticky"
      color="transparent"
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100px' }}>
          <img
            src={gelota_logo_black} // Replace with your actual logo
            alt="Logo"
            style={{ marginRight: 8, width: '130px', height: 'auto', objectFit: 'contain' }}
          />
        </div>

        {!isTablet ? (
          // Desktop View
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="Contact us">
              <HeadsetMicIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginRight: 2, fontWeight: 700 }}>
              Contact us
            </Typography>

            <IconButton color="inherit" aria-label="Language selection">
              <LanguageIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginRight: 2, fontWeight: 700 }}>
              IN/INR
            </Typography>

            <IconButton color="inherit" aria-label="Cart">
              <ShoppingCartIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginRight: 2, fontWeight: 700 }}>
              Cart
            </Typography>

            <IconButton color="inherit" aria-label="Sign in">
              <AccountCircleIcon />
            </IconButton>
            <Typography variant="body1" sx={{ marginRight: 2, fontWeight: 700 }}>
              Sign in
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 20,
                backgroundColor: '#000', // Black background
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
            >
              Sign up for free
            </Button>
          </div>
        ) : (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <CustomDrawer items={drawerItems} open={drawerOpen} onClose={toggleDrawer(false)} />
            </>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
