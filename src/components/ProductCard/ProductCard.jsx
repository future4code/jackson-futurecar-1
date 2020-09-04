import React from 'react';
import Car from './Car.jpg'
import {useStyles} from './style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import CardDetails from '../ProductCardDetails/ProductCardDetails'
import CardDetails from './components/ProductCardDetails/ProductCardDetails'

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Car}
          title="Car name"
        />
        <CardContent className={classes.description} >
          <Typography gutterBottom variant="h5" component="h2" >
            Hb20 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R$ 32.000,00
          </Typography>
        </CardContent>
        <CardDetails details="olá, sou o detalhe do seu produto"/>
      </CardActionArea>
    </Card>
  );
}
