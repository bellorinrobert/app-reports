import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from '@mui/material';
import "@fontsource/inter";
import { theme } from './themes/Basic';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ p: 4 }}>
          <AppRoutes />
        </Box>
      </ThemeProvider>
      
    </Provider>
  );
}

export default App;

