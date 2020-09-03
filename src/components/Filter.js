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
    width: 300px;
    border: solid 5px black;
    padding: 20px;
`;

  
  
export default class Filter extends React.Component {
    state = {

    }
   
    render () {
        
        return (
            
        <MuiThemeProvider theme={theme}>
            <FilterContainer>
            <Button variant="contained" color="secondary"><strong>Limpar Filtros</strong></Button>
            <br />
                <div>
                    <h2>Ordenar:</h2>
                        <FormControl component="fieldset">                    
                                <FormLabel component="legend">Preço</FormLabel>
                                    <RadioGroup aria-label="filter">
                                        <FormControlLabel value="Menor Preço" control={<Radio />} label="Menor Preço" />
                                        <FormControlLabel value="Maior Preço" control={<Radio />} label="Maior Preço" />                  
                                    </RadioGroup>

                        </FormControl>
                <br />
                        <FormControl component="fieldset">                    
                                <FormLabel component="legend">Prazo de entrega</FormLabel>
                                    <RadioGroup aria-label="filter">
                                        <FormControlLabel value="Menor Prazo" control={<Radio />} label="Menor Prazo" />
                                        <FormControlLabel value="Maior Prazo" control={<Radio />} label="Maior Prazo" />                  
                                    </RadioGroup>
                        </FormControl>
                <br />
                        <FormControl component="fieldset">                
                            <FormControl>
                                <TextField id="Modelo do carro" label="Modelo do carro" />
                            </FormControl>
                        </FormControl>
                <br />
                </div>
                <br />
                
                <div>
                    <h2>Filtrar:</h2>
                        <h5>Preço:</h5>                        
                            <FormControl>
                                <TextField id="De" label="De" /><TextField id="Até" label="Até" />
                            </FormControl>
                        <br />
                        <h5>Descrição:</h5>
                            <FormControl>
                                <TextField id="Descrição" label="Descrição do carro" />
                            </FormControl>                
                </div>
                <br />                            
                <Button variant="contained" color="primary">Filtrar</Button>
            </FilterContainer>
            
        </MuiThemeProvider>
            
        );
    }
}