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

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: solid 5px black;
    padding: 20px;
`;


const mock = [
    'Opção',
    'Opção',
    'Opção',
    'Opção',
    'Opção',
    'Opção',
    'Opção',
    'Opção',
    'Opção',
    'Opção',
  ];


export class Filter extends React.Component {
    render () {
        return (
            
            
            <FilterContainer>
            <Button variant="contained">Limpar Filtros</Button>
            <br />
                <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Ordenar</FormLabel>
                    <RadioGroup aria-label="gender">
                        <FormControlLabel value="Menor Preço" control={<Radio />} label="Menor Preço" />
                        <FormControlLabel value="Maior Preço" control={<Radio />} label="Maior Preço" />
                        <FormControlLabel value="Mais Novos" control={<Radio />} label="Mais Novos" />
                        <FormControlLabel value="Menor Quilometragem" control={<Radio />} label="Menor Quilometragem" />
                        <FormControlLabel value="Mais Recentes na FutureCars" control={<Radio />} label="Mais Recentes" />
                    </RadioGroup>
                </FormControl>
                </div>
                <h3>Marca e Modelo</h3>
                {/* Necessário arrumar a width deste componente */}
                <div>
                <FormControl component="fieldset">
                <InputLabel>Selecione uma marca</InputLabel>
                    <Select>
                        {mock.map((opcoes) =>
                        <MenuItem>
                        {opcoes}
                        </MenuItem>
                        )}
                    </Select>
                    <br />
                    <InputLabel>Selecione o modelo</InputLabel>
                    <Select>
                        {/* esta lista deve ser renderizada em função do item anterior */}
                        {mock.map((opcoes) =>
                        <MenuItem>
                        {opcoes}
                        </MenuItem>
                        )}
                    </Select>
                </FormControl>
     
                
                </div>
                <h3>Quilometragem</h3>
                <FormControl>
                <TextField id="De" label="De" /><TextField id="Até" label="Até" />
                </FormControl>
                <h3>Estado</h3>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="SC"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="PR"
                    labelPlacement="end"
                    />
                </FormGroup>
                <h3>Preço</h3>
                <FormControl>
                <TextField id="De" label="De" /><TextField id="Até" label="Até" />
                </FormControl>
                <h3>Câmbio</h3>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Automático"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Manual"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Semi"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Cvt"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Sequencial"
                    labelPlacement="end"
                    />
                </FormGroup>
                <h3>Ano</h3>
                <FormControl>
                <TextField id="De" label="De" /><TextField id="Até" label="Até" />
                </FormControl>
                <h3>Cor</h3>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Branco"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Prata"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Preto"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Cinza"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Vermelho"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Azul"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Verde"
                    labelPlacement="end"
                    />
                </FormGroup>
                <Button variant="contained">Filtrar</Button>
            </FilterContainer>
        );
    }
}