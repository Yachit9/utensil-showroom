import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          component={motion.div}
          initial={{ opacity: -10 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            height: '90vh',
            backgroundImage: 'url(/mmas3.webp)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          
        </Box>

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Brand Story */}
        <Box mt={9} textAlign="center" py={5} sx={{ backgroundColor: '#f7f7f7' }}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" color="textSecondary" maxWidth="lg" mx="auto">
          In the 1970s, when "Maghar Mal and Sons" was first established, it began as a humble, modest shop, carrying only a few carefully selected utensils. Each item was chosen for its quality and craftsmanship, reflecting a commitment to offer the finest products to the local community. With sheer dedication, the founders put in years of hard work—sourcing materials, designing displays, and building relationships with loyal customers. Over time, as word spread about the quality and reliability of our utensils, the shop grew, evolving into a cherished destination for kitchen essentials. Now, after decades of dedication, "Maghar Mal and Sons" stands as a symbol of quality, trust, and family tradition, passed down through generations, each one adding to the legacy. Our journey is rooted in a passion for excellence, a love for craftsmanship, and the resilience that has carried us from a small corner store to the premium establishment it is today.
          </Typography>
          
          

        </Box>

      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
