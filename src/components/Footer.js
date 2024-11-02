// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box py={3} sx={{ backgroundColor: '#333', color: '#fff' }}>
      <Typography variant="body2" component="p" textAlign="center">
        &copy; {new Date().getFullYear()} | All rights reserved.
      </Typography>
      <Box textAlign="center" mt={1}>
        <Link href="/contact" color="inherit" underline="hover" mx={1}>
          Contact
        </Link>
        <Link href="/about" color="inherit" underline="hover" mx={1}>
          About Us
        </Link>
      </Box>

      {/* Store Location Section */}
      <Box mt={4} py={4} sx={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* <Typography variant="h5" gutterBottom textAlign="center">
          Visit Our Showroom
        </Typography> */}
        <Grid container spacing={3} alignItems="center">
          {/* Store Details */}
          <Grid item xs={12} md={5} textAlign="center">
            {/* "VISIT US" with Pin Icon */}
            <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="h6" sx={{ ml: 1 }}>
                VISIT US
              </Typography>
            </Box>
            <Typography variant="h6">
              Maghar Mal & Sons
            </Typography>
            <Typography variant="body2" color="inherit">
              Maghar Mal and Sons, Dhangu Road, Pathankot
            </Typography>
            <Typography variant="body2" color="inherit">
              Phone: 9888526154, 9888969900
            </Typography>
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={7}>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.4390640307506!2d75.64973887564203!3d32.273171473878236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f41f14690b9%3A0x2d3cc6ddcb20391b!2sMaghar%20Mal%20And%20Sons!5e0!3m2!1sen!2sin!4v1730530654566!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              title="Store Locator"
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
