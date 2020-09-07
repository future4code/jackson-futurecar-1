import React from 'react'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ff5c5c"
      },
      secondary: {
        main: "#ododod"
      }
    }
  });
    

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 170px;
    padding: 8px;
    font-size:14px;

`
  
  
export default class Filter extends React.Component {
    state = {

    }
   
    render () {
        
        return (
            
        <MuiThemeProvider theme={theme}>
            <FilterContainer>
                <Button size="small" variant="contained" color="secondary" onClick={this.props.LimparCampos}><strong>Limpar Filtros</strong></Button>
            
                <div>
                    <h2>Filtrar:</h2>
                    <h5>Preço:</h5>                        
                    <FormControl>
                        <TextField  
                            id="De" 
                            label="De" 
                            value={this.props.valorMinimo}
                            onChange={this.props.Minimo}
                        />
                        <TextField 
                            id="Até" 
                            label="Até"
                            value={this.props.valorMaximo}
                            onChange={this.props.Maximo}
                        />
                    </FormControl>

                    <h5>Descrição:</h5>
                    <FormControl>
                        <TextField 
                            id="Descrição" 
                            label="Descrição do carro" 
                            value={this.props.valorBuscar}
                            onChange={this.props.Busca}
                        />
                    </FormControl>                
                </div>  
                <br/>                        
                
            </FilterContainer>
            
        </MuiThemeProvider>
            
        );
    }
}