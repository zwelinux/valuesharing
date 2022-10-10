import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import ImgMediaCard from './Card';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImgMediaCardNew from './NewCard';
import { Link } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ResponsiveAppBar />
      
      <Container maxWidth="md">
        <br /><br />   
        <Typography align='left' variant='h4'>
          <b>SELECT COURSES</b>        
        </Typography> 
        <Typography align='left' variant='subtitle1'>
          Unleash the power of subconscious mind 
        </Typography> 
      </Container>

      <br /><br />

      <Container maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ImgMediaCard />
            </Grid>
            <br />
            <Grid item md={6}>
              <ImgMediaCardNew />
            </Grid>
          </Grid>
        </Box>
      </Container>

    <br /><br /><br />
    {/* <Box sx={{ bgcolor: '#3377ff', height: '18vh' }} /> */}
    <Container maxWidth="md">
      <Typography variant='subtitle2' align='center'>PWA 2022 DEVELOPED BY WAANEIZA WWS</Typography>
    </Container>
    <br />
    </React.Fragment>
  );
}

export default App;
