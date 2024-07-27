import React, { Suspense, lazy } from 'react';
import './App.css';
import { CircularProgress, Container, Typography } from '@mui/material';

const Products = lazy(() => import('./components/Products'));

function App() {
  return (
    <Container className="App">
      <Typography variant="h3" component="h1" gutterBottom>
        Supply Chain Visualizer
      </Typography>
      <Suspense fallback={<CircularProgress />}>
        <Products />
      </Suspense>
    </Container>
  );
}

export default App;
