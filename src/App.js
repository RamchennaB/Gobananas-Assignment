// src/App.js

import React from 'react';
import { ThemeProvider, CssBaseline, Container, Grid, Typography } from '@mui/material';
import DataList from './DataList.js';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ marginTop: '50px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
              USER COMMENTS  FROM JSON API
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DataList endpoint="comments" />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
