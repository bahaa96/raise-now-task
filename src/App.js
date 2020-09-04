import React from 'react';
import { ThemeProvider } from 'styled-components';
import SnackbarProvider from 'react-simple-snackbar'

import Home from './pages/Home';
import theme from './theme';

import './App.css';


function App() {
  return (
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
