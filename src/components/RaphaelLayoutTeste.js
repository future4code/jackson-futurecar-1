import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { PaginaProdutos } from './PaginaProduto/PaginaProdutos'
import { HeaderFuture } from './Header/HeaderFuture'
import PaginaCadastro from './PaginaCadastro/PaginaCadastro'


const Box = styled.div`
    min-width: 300px;
`
/*
const Header = styled.header`
    min-height: 90px;
    border: 1px solid black;
    background-color: rgb(70,70,70);
    font-weight: bold;
    font-size: 26px;
    display: grid;
    place-items: center;
    color: whitesmoke;
`
*/

const Footer = styled.footer`
    min-height: 60px;
    min-width: 100vw;
    border: 1px solid black;
    background-color: rgb(70,70,70);
    font-weight: bold;
    font-size: 26px;
    display: grid;
    place-items: center;
    color: whitesmoke;
`


export class RaphaelLayoutTeste extends React.Component{

    queroComprar=()=>{
        window.alert('(click) Quero Comprar')
    }

    queroVender=()=>{
        window.alert('(click) Quero Vender')
    }

    clickLogo=()=>{
        window.alert('(click)  Logo / *direciona para a home')
    }

    render(){
        return(
            <Box>
                <HeaderFuture
                    queroComprar={this.queroComprar}
                    queroVender={this.queroVender}
                    clickLogo={this.clickLogo}
                />
                <PaginaCadastro></PaginaCadastro>
                <PaginaProdutos></PaginaProdutos>
                <Footer>FOOTER</Footer>
            </Box>
        )
    }
}
