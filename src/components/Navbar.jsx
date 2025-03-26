import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      
      <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
        <ListItemText primary="Contact Us" />
      </ListItem>
      {token ? (
        <ListItem button onClick={() => { handleLogout(); handleDrawerToggle(); }}>
          <ListItemText primary="Logout" />
        </ListItem>
      ) : (
        <>
          <ListItem button component={Link} to="/signup" onClick={handleDrawerToggle}>
            <ListItemText primary="Signup" />
          </ListItem>
          <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>
            <ListItemText primary="Login" />
          </ListItem>
        </>
      )}
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', sm: 'block' } }}>Home</Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ display: { xs: 'none', sm: 'block' } }}>Contact Us</Button>
          {token ? (
            <Button color="inherit" onClick={handleLogout} sx={{ display: { xs: 'none', sm: 'block' } }}>Logout</Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/signup" sx={{ display: { xs: 'none', sm: 'block' } }}>Signup</Button>
              <Button color="inherit" component={Link} to="/login" sx={{ display: { xs: 'none', sm: 'block' } }}>Login</Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: 'none' } }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;