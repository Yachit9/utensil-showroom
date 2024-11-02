// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message || result.error);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setResponseMessage('An error occurred while sending the message.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      {/* Contact Information */}
      <Box sx={{ mt: 2, mb: 4 }}>
        <Typography variant="h6">Get in Touch</Typography>
        <Typography variant="body1" color="textSecondary">
          Reach us directly at:
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Mohan Lal Mahajan: 9780484133
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Amit Mahajan: 9888526154
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Aseem Mahajan: 9888969900
        </Typography>
      </Box>

      {/* Form Section */}
      <Typography variant="body1" color="textSecondary" paragraph>
        Have questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          multiline
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }} type="submit">
          Submit
        </Button>

        {/* Response Message - placed under the submit button */}
        {responseMessage && (
          <Typography 
            variant="body1" 
            sx={{ mt: 2, p: 1, bgcolor: 'lightgreen', borderRadius: '4px', color: 'black' }}
          >
            {responseMessage}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
