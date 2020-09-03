import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Logo1 from './img-cadastro/logo1.png' 
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff5d5b',
      },
      secondary: {
        main: '#fff',
      },
    },
  });

const Logo = styled.img `
  width: 22%;
  padding: 2%;
`

export class PaginaCadastro extends React.Component {
    state = {
        inputName: '',
        inputDescription: '',
        inputPrice: '',        
        inputPayment: '',
        inputShipping: ''
    }

    //INPUTS CONTROLADOS

    onChangeName = (e) => {
        this.setState({inputName: e.target.value})        
    }

    onChangeDescription = (e) => {
        this.setState({inputDescription: e.target.value})        
    }

    onChangePrice = (e) => {
        this.setState({inputPrice: e.target.value})        
    }

    onChangePayment = (e) => {
        this.setState({inputPayment: e.target.value})        
    }

    onChangeShipping = (e) => {
        this.setState({inputShipping: e.target.value})        
    }

   ButtonCreateCar = () => {
       const body = {
           name: this.state.inputName,
           description: this.state.inputDescription,
           price: this.state.inputPrice,
           paymentMethod: this.state.inputPayment,
           shipping: this.state.inputShipping
       }

       axios.post('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars', body 
       ).then(res => {
           alert("Veículo cadastrado com sucesso")
       }).catch(err => {
           console.log('nao foi')
       })

       this.setState({inputName: '', inputDescription: '', inputPrice: '', inputPayment: '', inputShipping: ''})
   }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Button onClick={this.props.voltar} variant="contained" color="primary">Voltar</Button>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Logo src={Logo1}/>
                        </Grid>                
                        <Grid item xs={6}> 
                            
                                <Typography variant="h3">Cadastre seu veículo.</Typography>
                                <Typography variant="body1">Na FutureCar você anúncia o seu veículo e garante uma boa venda, com segurança tanto para quem vende, quanto para quem compra.</Typography>
                            
                        </Grid>
                        <Grid item xs={6} > 
                                                              
                            <FormControl margin="dense" color="primary" variant='filled'>                           
                                
                                <TextField
                                    value={this.state.inputName}
                                    onChange={this.onChangeName}
                                    margin="normal"
                                    size="small" 
                                    label="Título" 
                                    name="titulo" 
                                    color='primary' 
                                    variant='outlined' 
                                    autoFocus={true}
                                />                       

                                <TextField
                                    value={this.state.inputDescription}
                                    onChange={this.onChangeDescription}
                                    margin="normal"  
                                    size="medium" 
                                    label="Descrição do veículo" 
                                    name="titulo" 
                                    color='primary' 
                                    variant='outlined' 
                                />

                                <Grid container spacing={4}>
                                    <Grid item xs={4}>
                                        <TextField
                                            value={this.state.inputPrice}
                                            onChange={this.onChangePrice}
                                            margin="normal"  
                                            size="medium" 
                                            label="Valor"
                                            type="number" 
                                            name="Valor" 
                                            color='primary' 
                                            variant='outlined'
                                        />    
                                    </Grid> 
                                    <Grid item xs={4}>
                                        <TextField
                                            value={this.state.inputShipping}
                                            onChange={this.onChangeShipping}
                                            margin="normal"  
                                            size="medium" 
                                            label="Remessa"
                                            type="number" 
                                            name="Remessa" 
                                            color='primary' 
                                            variant='outlined'
                                        />    
                                    </Grid>   
                                    <Grid item xs={4}>
                                        <TextField
                                            value={this.state.inputPayment}
                                            onChange={this.onChangePayment}
                                            margin="normal"  
                                            size="medium" 
                                            label="Método de pagamento" 
                                            name="Método de pagamento" 
                                            color='primary' 
                                            variant='outlined'
                                        />     
                                    </Grid>                 
                                </Grid>

                                    <Button onClick={this.ButtonCreateCar} variant="contained" color="primary">Cadastrar veículo</Button>
                            </FormControl>                    
                        </Grid>               
                    </Grid>
                </Container>
            </ThemeProvider>
        )
    }
}

export default PaginaCadastro;