// src/pages/Products.js
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Hawkins Cooker',
    description: 'One of the best Triply cooker.',
    image: '/triplycooker.jpg', // Make sure to replace this with your actual image path
  },
  {
    id: 2,
    name: 'Prestige Cooker',
    description: 'One of the best Prestige cooker',
    image: '/prestige.webp',
  },
  {
    id: 3,
    name: 'Vinod Dinner Set',
    description: 'One of the best dinersets available with us',
    image: '/dinnerset.webp',
  },
  {
    id: 4,
    name: 'Non-Stick Frying Pan',
    description: 'A durable non-stick frying pan for hassle-free cooking.',
    image: '/tawa.jpg',
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image} // Use your product image URL
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {product.price}
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
