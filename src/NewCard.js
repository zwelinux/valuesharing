import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


export default function ImgMediaCardNew() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Ko Zwe Linn Htet"
        height="140"
        image="https://cdn.dribbble.com/users/508588/screenshots/11263679/thg_m78_05_4x.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Program Creation 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          တိုးတက်ပြောင်းလဲနေတဲ့ နည်းပညာခေတ်ကြီးမှာ သင် နောက်ကျ မကျန်ခဲ့စေဖို့ program creation class ကိုအခုပဲ​ join လိုက်ပါ။ 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to="/program_creation">Join</Link>
        </Button>
        <Button size="small">LEARN MORE</Button>
      </CardActions>
    </Card>
  );
}
