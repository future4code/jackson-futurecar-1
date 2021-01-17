import React from 'react';
// import Car from './Car.jpg'
import {useStyles} from './style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import CardDetails from '../ProductCardDetails/ProductCardDetails'
import CardDetails from '../ProductCardDetails/ProductCardDetails'

export default  function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.dados.url}
          title={props.dados.name}
        />
        <CardContent className={classes.description} >
          <Typography gutterBottom variant="h5" component="h2" >
            {props.dados.name} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R${props.dados.price}
          </Typography>
        </CardContent>
        <CardDetails details={props.dados.description}/>
      </CardActionArea>
    </Card>
  );
}
