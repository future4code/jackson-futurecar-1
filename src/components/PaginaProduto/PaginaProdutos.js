import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Filter from '../Filter/Filter'
import Button from '@material-ui/core/Button';

const Main = styled.main`
    /*background-color: rgb(230,230,230);*/
    /*border: 1px solid black;*/
    width: 95%;
    /*min-height: 90vh;*/
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items:flex-start;
`

const FiltroBox = styled.div`
    /*background-color: coral;*/
    min-width: 100px;
    flex-grow:1;

    @media screen and (max-width: 600px){display: none;}
`

const FiltroTeste = styled.div`
    /*background-color: tan;*/
    border: 1px solid rgb(160,160,160);
    border-radius: 10px;
    padding: 15px;
    /*@media screen and (max-width: 600px){display: none;}*/
`

const ProdBox = styled.div`
    /*background-color: salmon;*/
    /*border: 1px solid black;*/
    min-width: 100px;
    padding: 0 20px;
    flex-grow:2;

    display: grid;
    column-gap: 35px;
    row-gap: 45px;
    grid-template-columns: 1fr;
    @media screen and (min-width:900px){grid-template-columns: 1fr 1fr;};
    @media screen and (min-width:1400px){grid-template-columns: 1fr 1fr 1fr;};
`

const CardProduto = styled.div`
    background-color: whitesmoke;
    /*border: 1px solid gray;*/
    border-radius: 12px;
    box-shadow: -1px 3px 2px rgb(160,160,160);
    height: 400px;
    display: grid;
    place-items: center;
    font-weight: bold;
    font-size: 24px;
`


export class PaginaProdutos extends React.Component{
    state= {
        //vai chamar o array de produtos e setar o valor escolhido
       ordenacao: 'name'
    }
      

    ordena = (event) => {
        if(event.target.value === 'name'){
            this.setState({ordenacao: 'name'})
        }else
        if(event.target.value === 'price'){
            this.setState({ordenacao: 'price'})
        }else
        if(event.target.value === 'shipping'){
            this.setState({ordenacao: 'shipping'})
        }


    }
    render(){
        return(
            <Fragment>
                <Button onClick={this.props.voltar} variant="contained" color="primary">Voltar</Button>
                <select onClick={this.ordena}>
                    <option value="name">Título</option>
                    <option value="price">Valor de Venda</option>
                    <option value="shipping">Prazo de Entrega</option>
                </select>
                <Main>
                    
                    <FiltroBox>
                        <Filter />
                    </FiltroBox>
                    <ProdBox>
                        <CardProduto>CardProduto</CardProduto>
                        <CardProduto>CardProduto</CardProduto>
                        <CardProduto>CardProduto</CardProduto>
                        <CardProduto>CardProduto</CardProduto>
                        <CardProduto>CardProduto</CardProduto>
                    </ProdBox>
                </Main>
            </Fragment>
        )
    }
}
