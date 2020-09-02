import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Logo1 from '../components/img-cadastro/logo1.png'    
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <Logo src={Logo1}/>
                        </Grid>                
                        <Grid item xs={6}> 
                            
                                <Typography variant="h3">Cadastre seu veículo.</Typography>
                                <Typography variant="body1">Na FutureCar você anúncia o seu veículo e garante uma boa venda, com segurança tanto para quem vende, quanto para quem compra.</Typography>
                            
                        </Grid>
                        <Grid container xs={6} spacing={12}> 
                                                              
                            <FormControl margin="dense" color="primary" variant='filled'>                           
                                
                                <TextField
                                    margin="normal"
                                    size="small" 
                                    label="Título" 
                                    name="titulo" 
                                    color='primary' 
                                    variant='outlined' 
                                    autoFocus={true}
                                />                         

                                <TextField  
                                    margin="normal"
                                    size="small"
                                    type="link" 
                                    label="Endereço da imagem" 
                                    name="imagem" 
                                    color='primary' 
                                    variant='outlined' 
                                />

                                <TextField
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
                                            margin="normal"  
                                            id="date"
                                            label="Prazo de entrega"
                                            type="date"
                                            defaultValue="2000-01-01"                                             
                                            color='primary'                                            
                                            variant='outlined'
                                        />    
                                    </Grid>   
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"  
                                            size="medium" 
                                            label="Método de pagamento" 
                                            name="Método de pagamento" 
                                            color='primary' 
                                            variant='outlined'
                                        />     
                                    </Grid>                 
                                </Grid>

                                    <Button variant="contained" color="primary">Cadastrar veículo</Button>
                            </FormControl>                    
                        </Grid>               
                    </Grid>
                </Container>
            </ThemeProvider>
        )
    }
}

export default PaginaCadastro;