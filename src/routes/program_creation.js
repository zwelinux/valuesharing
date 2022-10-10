import { Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../ResponsiveAppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


export default function ProgramCreation() {
    return (
        <div>
            <ResponsiveAppBar />

            <Container maxWidth="md">
                <br /><br /><br />
            
                <Typography align='left' variant='h4'>
                <b>Program Creation Course</b>        
                </Typography> 

                <Typography align='left' variant='subtitle2'>
                တိုးတက်ပြောင်းလဲနေတဲ့ နည်းပညာခေတ်ကြီးမှာ သင် နောက်ကျ မကျန်ခဲ့စေဖို့ program creation class ကိုအခုပဲ​ join လိုက်ပါ။ 
                </Typography> 
                
                <Typography variant='overline'>
                    <Link to='/'>BACK TO HOME</Link>
                </Typography>
                
            </Container>

            <br />   
        
        <Container maxWidth="md">
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                frameborder="0"
                width="100%"
                height="450px"
                src="https://waaneizasharing.xyz/filer/sharing/1665124285/288/">
            </iframe>
        </Container>

        <br /><br />

            <Container maxWidth="md">
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <iframe id="inlineFrameExample"
                            title="Inline Frame Example"
                            frameborder="0"
                            width="100%"
                            height="450px"
                            src="https://waaneizasharing.xyz/filer/sharing/1665126446/323/">
                        </iframe>
                        
                    </Grid>
                    <br />
                    <Grid item md={6}>
                        <Typography variant='h5' align='left'><b>Course Detail</b></Typography>
                        <Typography variant='subtitle2' align='left'>By Ko Zwe Linn Htet</Typography>
                        <br />
                        <Typography variant='text' align='justify'>
                        သင်ဟာ နည်းပညာကို စိတ်ဝင်စားတဲ့လူတစ်ယောက်လား သို့မဟုတ် application တစ်ခုကို သုံးနေတုန်း နောက်ကွယ်မှာ ဘာတွေဘယ်လိုအလုပ်လုပ်နေလဲ သိချင်စိတ်ဖြစ်မိလား? ဒါဆိုရင်တော့ သေချာပါတယ် ဒီ course ဟာ သင့်အတွက်ပါပဲ။ နေ့တစ်နေ့ရဲ့ ၂၄ နာရီမှာ ၂ နာရီလောက် အချိန်ပေးခြင်းအားဖြင့်
                        တိုးတက်ပြောင်းလဲနေတဲ့ နည်းပညာခေတ်ကြီးမှာ နောက်ကျ မကျန်ခဲ့စေဖို့ program creation class ကိုအခုပဲ​ join လိုက်ပါ။ 
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