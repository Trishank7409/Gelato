import React from 'react';
import { Button, Grid2 } from '@mui/material';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Homepage from './pages/Homepage';
import './App.css'
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <div >
      <Grid2 position='fixed'>
      <Header/>
      <SubHeader/>
      </Grid2>
      <Homepage />
      <Footer/>
    </div>
  );
};

export default App;