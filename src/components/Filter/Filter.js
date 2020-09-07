import React from 'react'
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


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
   // border: solid 1px black;
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