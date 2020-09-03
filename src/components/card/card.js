import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardDetails from '../ProductCardDetails/ProductCardDetails'
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios'

 const useStyles = theme => ({
    root:{
      maxWidth: 200,
      padding: 4,
    },
    media: {
      height: 140,
    },
    description: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: '#f3595b'
    }
  });


class MediaCard extends React.Component {
    state= {
        cars: []
    }
   
    
    componentDidMount = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars")
        .then(response => {
            this.setState({ 
                cars:[...this.state.cars,response.data]
            })
            console.log(this.state.cars)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
  render() {

    const {classes} = this.props

    return (
       {this.state.cars.map(car => {  
               <Card key={car.id} className={classes.root}> 
                 <CardActionArea>
                   <CardMedia className={classes.media}/>
                     <CardContent className={classes.description} >
                        <Typography gutterBottom variant="h5" component="h2" >
                          { car.name }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          { car.price }
                        </Typography>
                     </CardContent>
                   <CardDetails details={ car.details } />
                 </CardActionArea>
               </Card>
         })}
     );
  }
}
export default withStyles(useStyles, { withTheme: true })(MediaCard);