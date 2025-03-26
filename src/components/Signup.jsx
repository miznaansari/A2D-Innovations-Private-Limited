import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

 const token = JSON.parse(localStorage.getItem('user'))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await axios.post('http://localhost:3000/api/users/signup', formData);
      setToast({ open: true, message: 'Signup Successful!', severity: 'success' });
      console.log('Signup Successful:', response.data);
    } catch (error) {
      setToast({ open: true, message: 'Error during signup', severity: 'error' });
      console.error('Error during signup:', error);
    } finally {
      setLoader(false);
    }
  };

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} p={4} borderRadius={2} boxShadow={3}>
        <Typography variant="h4" gutterBottom>
          Signup
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={loader}>
            {loader ? 'Signing Up...' : 'Signup'}
          </Button>
        </form>
      </Box>
      
      <Snackbar open={toast.open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Signup;
