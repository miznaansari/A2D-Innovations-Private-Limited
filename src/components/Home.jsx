import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Container>
        <Typography 
          variant="h2" 
          fontWeight="bold" 
          gutterBottom 
          sx={{ fontSize: { xs: '2rem', md: '4rem' } }}
        >
          Welcome to 2D Innovations Private Limited
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.5rem' } }}
        >
          Transforming Ideas into Innovative Solutions
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleLogin}>
          Login
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
