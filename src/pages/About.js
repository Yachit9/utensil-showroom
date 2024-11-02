// src/pages/About.js
import React from 'react';
import { Container, Box, Typography } from '@mui/material';


const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
      Welcome to Maghar Mal and Sons, one of the oldest and most trusted names in the world of kitchen essentials. Since our inception in the 1970s, we have been dedicated to providing quality utensils and cookware to homes and businesses alike. Over the years, we’ve grown not only as a showroom but as a cornerstone in the community, known for our commitment to excellence and customer satisfaction.
      </Typography>
      <Typography variant="body1" paragraph>
      We pride ourselves on offering a wide range of products, from everyday kitchen essentials to premium cookware, all at the best rates in the city. As a leading wholesaler, we ensure that our customers—whether buying in bulk or just a few pieces—always receive the finest quality and the best prices. When you shop with us, you’re not just buying utensils; you’re investing in products that stand the test of time.

Thank you for making Maghar Mal and Sons a part of your kitchen story. We look forward to serving you for generations to come!
      </Typography>
      <Box component="img" src="/showroom.jpg" alt="Showroom" width="100%" height="auto" sx={{ mt: 4 }} />
    </Container>
  );
};

export default About;
