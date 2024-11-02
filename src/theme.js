// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',  // Dark shade for a premium look
    },
    secondary: {
      main: '#FFD700',  // Gold for a luxurious accent
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
