// src/components/Navbar.js
// Add this to your Header component or App.js if you haven't yet
import { Link } from 'react-router-dom';

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';



const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Maghar Mal & Sons
      </Typography>
      <Link to="/"><Button color="inherit">Home</Button></Link>
      <Link to="/products"><Button color="inherit">Products</Button></Link>
      <Link to="/contact"><Button color="inherit">Contact</Button></Link>
    </Toolbar>
  </AppBar>
);

export default Navbar;
