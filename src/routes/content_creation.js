import { Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../ResponsiveAppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';



export default function ContentCreation() {
    return (
        <div>
            <ResponsiveAppBar />

            <Container maxWidth="md">
                <br /><br /><br />
            
                <Typography align='left' variant='h4'>
                <b>Content Creation Course</b>        
                </Typography> 

                <Typography align='left' variant='subtitle2'>
                ထိရောက်တဲ့ လုပ်ငန်းတိုးချဲ့မှုအတွက် digital content ကောင်းတွေ ဖန်တီးဖို့ content creation class ကို အခုပဲ join လိုက်ပါ။
                </Typography> 
                
                <Typography variant='overline'>
                    <Link to='/'>BACK TO HOME</Link>
                </Typography>
                
            </Container>

            <br /><br />

            <Container maxWidth="md">
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Cx2dkpBxst8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </Grid>
                    <br />
                    <Grid item md={5}>
                        <Typography variant='h5' align='left'><b>Course Detail</b></Typography>
                        <Typography variant='subtitle2' align='left'>By Ma Thet Htar Wai</Typography>
                        <br />
                        <Typography variant='text' align='justify'>
                        ထိရောက်တဲ့ လုပ်ငန်းတိုးချဲ့မှုအတွက် digital content ကောင်းတွေ ဖန်တီးဖို့ content creation class ကို အခုပဲ join လိုက်ပါ။
                        </Typography>

                        <br /><br />
                        <Button variant="contained">Enroll Class Now</Button>


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

        </div>
    );
}