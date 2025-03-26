import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';


const Login = () => {
    const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await axios.post('https://a2d-innovations-private-limited-1.onrender.com/api/users/login', formData);
      setToast({ open: true, message: 'Login Successful!', severity: 'success' });
      console.log('Login Successful:', response.data);
      localStorage.setItem('token',response.data.token)
      navigate('/admin')
    } catch (error) {
      setToast({ open: true, message: 'Error during login', severity: 'error' });
      console.error('Error during login:', error);
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
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
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
            {loader ? 'Logging In...' : 'Login'}
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

export default Login;

