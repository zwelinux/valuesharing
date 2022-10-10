import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Ma Thet Htar Wai"
        height="140"
        image="https://assets.materialup.com/uploads/9f89cd28-0c83-4fd0-9c2f-2292f0adcd82/preview.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Content Creation
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ထိရောက်တဲ့ လုပ်ငန်းတိုးချဲ့မှုအတွက် digital content ကောင်းတွေ ဖန်တီးဖို့ content creation class ကို အခုပဲ join လိုက်ပါ။
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to="/content_creation">Join</Link>
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
