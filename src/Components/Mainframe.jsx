import React, { useEffect, useState } from 'react';
import {
  Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Home, Menu, Event } from '@mui/icons-material';
import theme from '../lib/colors';
import '../css/Mainframe.css';
import CentralContainer from './CentralContainer';

function Mainframe() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState('home');

  useEffect(() => {
    setMenuOpen(false);
  }, [menu]);

  return (
    <ThemeProvider theme={theme}>
      <div id="mainframe">
        <h1 id="title">Facto-Hub</h1>
        <IconButton aria-label="menu" onClick={() => setMenuOpen(true)} id="menu-btn">
          <Menu />
        </IconButton>
        <React.Fragment key="menu">
          <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
            <Box sx={{ width: 250 }}>
              <List>
                <ListItem key="home" disablePadding onClick={() => setMenu('home')}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem key="events" disablePadding onClick={() => setMenu('events')}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Event />
                    </ListItemIcon>
                    <ListItemText primary="Events" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
        <CentralContainer menu={menu} />
      </div>
    </ThemeProvider>
  );
}

export default Mainframe;
