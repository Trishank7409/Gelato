import React from 'react';
import { Box, Divider, ListItemButton, ListItemText, Drawer, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useStyles } from '../layout'; // Custom hook for styling
import CloseIcon from '@mui/icons-material/Close';

interface CustomDrawerProps {
  items: { label: string; icon?: JSX.Element; hasIcon?:boolean }[];
  open?: boolean;
  onClose?: () => void;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ items, open, onClose }) => {
  const style = useStyles();
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>

      <Box sx={{ padding: 2, width: 200 }}>
      {/* <IconButton onClick={onClose} sx={{ position: 'absolute', top: 0, right: 10 }}>
          <CloseIcon />
        </IconButton> */}
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton>
              {item.icon}
              <Typography className={style.subHeaderText} fontWeight={700}>
                {item.label} <KeyboardArrowDownIcon />
              </Typography>
            </ListItemButton>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
