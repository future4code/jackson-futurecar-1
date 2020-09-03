import React from 'react'
import styled from 'styled-components'
import Logo1 from '../components/img-cadastro/logo1.png' 


const Header = styled.header`
    background-color: whitesmoke;
    box-shadow: 0 2px 2px rgb(210,210,210);
    min-height: 100px;
    border-bottom: 6px solid #ff5c5c;
    color: whitesmoke;
    padding: 0 25px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    /* background-image: linear-gradient(to top, whitesmoke, whitesmoke, whitesmoke, whitesmoke, #ff5c5c); */
`

const Logo = styled.div`
    padding: 0 10px;
    font-weight: bold;
    font-size: 22px;
    display: flex;
    justify-items: flex-start;
    align-items: center;
    width: 17%;
    min-width: 170px;
    max-width: 300px;
    cursor: pointer;
    transition: 0.2s;

    :hover{background-color: rgb(235,235,235);}
`

const LogoImg = styled.img `
    min-width: 90px;
    max-width: 200px;
    width: 90%;
    @media screen and (min-width: 485px){min-width: 150px; width: 100%;};
`

const Nav = styled.nav`
    color: black;
    align-self: center;
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
`


const NavBtn = styled.div`
    box-sizing: border-box;
    border-radius: 32px;
    box-shadow: 0 2px 2px rgb(210,210,210);
    display: grid;
    place-items: center;
    font-size: calc(10px + 0.4vw);
    font-weight: bold;
    color: white;
    transition: 0.1s;
    cursor: pointer;
    
    margin: 5px;
    padding: 9px 17px;
    min-width: 120px;
    @media screen and (min-width: 485px){margin: 5px; padding: 12px 20px; min-width: 120px;};

    background-color: rgb(40,40,40);
    :hover{
        background-color: #3c3289;
        box-shadow: 0 3px 2px rgb(170,170,170);
    }

    :active{box-shadow: 0 1px 2px rgb(170,170,170);}

    :first-child{
        background-color: #ff5c5c;
        :hover{
            background-color: #f52c2c;
        }
    }
`



export class HeaderFuture extends React.Component{
    render(){
        return(
            <Header>
                <Logo onClick={this.props.clickLogo} >
                    <LogoImg src={Logo1}/>
                </Logo>
                <Nav>
                    <NavBtn onClick={this.props.queroComprar} >Quero Comprar</NavBtn>
                    <NavBtn onClick={this.props.queroVender} >&nbsp;Quero Vender&nbsp;</NavBtn>
                </Nav>
            </Header>
        )
    }
}
