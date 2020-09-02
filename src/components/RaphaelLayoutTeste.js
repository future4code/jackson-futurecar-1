import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { PaginaProdutos } from './PaginaProdutos'


const Box = styled.div`
    min-width: 300px;
`

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
    render(){
        return(
            <Box>
                <Header>HEADER</Header>
                <PaginaProdutos></PaginaProdutos>
                <Footer>FOOTER</Footer>
            </Box>
        )
    }
}
