import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
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
          Contact Us
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.5rem' } }}
        >
          Get in touch with us for more information!
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}
        >
          📧 Email: contact@2dinnovations.fake
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
        >
          📞 Phone: +123 456 7890
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;