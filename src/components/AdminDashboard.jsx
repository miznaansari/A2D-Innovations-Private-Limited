import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Store, ShoppingCart, Sell, AccountCircle, Menu } from '@mui/icons-material';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Profile');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/all');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const sections = [
    { name: 'Shop', icon: <Store /> },
    { name: 'Sell', icon: <Sell /> },
    { name: 'Buy', icon: <ShoppingCart /> },
    { name: 'Profile', icon: <AccountCircle /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'Shop':
        return <Typography>Welcome to the Shop Section!</Typography>;
      case 'Sell':
        return <Typography>Manage your products in the Sell Section.</Typography>;
      case 'Buy':
        return <Typography>View and manage purchases in the Buy Section.</Typography>;
      case 'Profile':
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>All Registered Users</Typography>
            <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );
      default:
        return <Typography>Select a Section</Typography>;
    }
  };

  const drawerContent = (
    <>
      <Typography variant="h6" sx={{ p: 1, textAlign: 'center' }}>Admin Panel</Typography>
      <List>
        {sections.map((section) => (
          <ListItem 
            button 
            key={section.name} 
            onClick={() => {
              setSelectedSection(section.name);
              setMobileOpen(false);
            }}
            selected={selectedSection === section.name}
          >
            <ListItemIcon>{section.icon}</ListItemIcon>
            <ListItemText primary={section.name} />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Mobile Menu Button */}
      <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ display: { md: 'none', xs: 'block' }, m: 2 }}>
        <Menu />
      </IconButton>

      {/* Sidebar for Desktop */}
      <Drawer
        variant="permanent"
        sx={{ width: 240, flexShrink: 0, display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}
      >
        {drawerContent}
      </Drawer>

      {/* Sidebar for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}
      >
        {drawerContent}
      </Drawer>

      {/* Content Area */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {selectedSection}
        </Typography>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default AdminDashboard;

