import { Grid2, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react';
import { useStyles } from '../layout';
import CustomDrawer from './CustomDrawer';
import { useDrawer } from '../context';
import MenuIcon from '@mui/icons-material/Menu';

const SubHeader: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    // const { drawerOpen, toggleDrawer  } = useDrawer();
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
      };
    const style = useStyles(theme);

    const subHeaderItems = [
        { label: 'Products', hasIcon: true },
        { label: 'Start selling', hasIcon: true },
        { label: 'Tools and apps', hasIcon: true },
        { label: 'Pricing', hasIcon: true },
        { label: 'Resources', hasIcon: true },
        { label: 'Pro sells', hasIcon: true },
        { label: 'GelatoConnect', hasIcon: true },
    ];

    return (
        !isTablet ? (
            <Grid2
                sx={{
                    background: 'white',
                    width: '100vw',
                }}
                container
                gap={8}
                pl={9}
                pt={2}
                pb={2}
                boxShadow={
                    "rgba(27, 31, 35, 0.08) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset"
                }
            >
                {subHeaderItems.map((item, index) => (
                    <Typography
                        key={index}
                        className={style.subHeaderText}
                        fontWeight={700}
                    >
                        {item.label} {item.hasIcon && <KeyboardArrowDownIcon />}
                    </Typography>
                ))}
            </Grid2>
        ) : (
            <>
             <IconButton color="inherit" onClick={ toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
                <CustomDrawer items={subHeaderItems} open={drawerOpen} onClose={toggleDrawer(false)} />
            </>
        )
    );
};

export default SubHeader;
