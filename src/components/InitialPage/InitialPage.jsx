import React from "react";
import styled from 'styled-components';
import { createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Logo from './img/logo-principal.png'

const theme = createMuiTheme({
  palette:{
    primary:{ 
      main: '#ff5d5b'
    }, 
    secondary:{
      main: '#fff'
    }
  }
});

class InitialPage extends React.Component {
  
  render(){

    return (
      <ThemeProvider theme={theme}>
      <InitialContainer>
        <div>
         <Logo1
         img src={Logo}/>
            
        </div>
        <div>
          <BotaoContainer>
          <Button onClick={this.props.pageCreateCar} variant='contained' color='primary'>
            SOU COMPRADOR
          </Button>
          <Button onClick={this.props.pageProduct}variant='contained' color='primary'>
            SOU VENDEDOR
          </Button>
          </BotaoContainer>
          
          </div>
          </InitialContainer>
    </ThemeProvider>
    );
  }
}

export default InitialPage;
const InitialContainer = styled.div`
display: grid;
border: 1px solid grey;
grid-template-columns:1fr 1fr ;
padding: 16px;
margin:0 auto;
margin-top: 40px;
gap:1px;
width: 80%;
height: 500px;
align-items: center;
justify-self: center;
border-radius: 10px;
`
const BotaoContainer = styled.div`
display: grid;
grid-template-rows: 1fr 1fr ;
grid-gap: 10px;
padding: 10%;
align-items: center;
justify-self: center;
`
const Logo1 = styled.img`
  width:100%
  padding: 30%
  align-items: center;
  justify-self: center;
`

