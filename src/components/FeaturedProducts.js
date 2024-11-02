// src/components/FeaturedProducts.js
import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography} from '@mui/material';

const FeaturedProducts = () => {
  // Sample data; replace with real product info
  const products = [
    { id: 1, name: 'Hawkins Cooker',  image: '/triplycooker.jpg' },
    { id: 2, name: 'Prestige Cooker',  image: '/prestige.webp' },
    { id: 3, name: 'Dinner Set', image: '/dinnerset.webp' },
    { id: 4, name: 'Clix Chimney', image: '/chimney.webp' },
    { id: 5, name: 'Gas Burner', image: '/burner.webp' },
    { id: 6, name: 'Futura Tawa', image: '/tawa.jpg' },
  ];

  return (
    <Box mt={6}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.price}
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
