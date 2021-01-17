import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Filter from '../Filter/Filter'
import ProductCard from '../ProductCard/ProductCard'
import {HeaderFuture} from '../Header/HeaderFuture'

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
    @media screen and (min-width:600px){grid-template-columns: 1fr 1fr;};
    @media screen and (min-width:1100px){grid-template-columns: 1fr 1fr 1fr;};
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
const Topo = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px repeat(2, 2fr);
  grid-row-gap:5px;
  grid-column-gap:5px;
  select {
    grid-column: 4/4;
    grid-row: 1/2;
    height: 20px;
    justify-self: self-end;
    align-self: center;
  }
  h3 {
    grid-column: 4/4;
    grid-row: 1/2;
    justify-self: self-start;
    align-self: center;

  }
`
 


export class PaginaProdutos extends React.Component{
    state= {
        cars: [],
        ordenaitens: 'name',
        valorMaximo: '',
        valorMinimo: '',
        valorBusca: ''
       
    }
    
    ordena = (event) => {
        if(event.target.value === 'name'){
            this.setState({ordenaitens: 'name'})
        }else if(event.target.value === 'price'){
            this.setState({ordenaitens: 'price'})
        }else if(event.target.value === 'shipping'){
            this.setState({ordenaitens: 'shipping'})
        }  
    }

    onchangeMaximo = (event) => {
        this.setState({valorMaximo: Number(event.target.value)})
    } 

    onchangeMinimo = (event) => {
        this.setState({valorMinimo: Number(event.target.value)})
    } 
    
    onchangeBusca = (event) => {
        this.setState({valorBusca: event.target.value.toUpperCase()})
    }
    
    limparFiltros = () => {
        this.setState({
            valorMaximo: '',
            valorMinimo: '',
            valorBusca: ''
        }
        )
    }

    
    fetchCarList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars")
        .then(response => {
            this.setState({ cars: response.data.cars})
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    componentDidMount = () => {
        this.fetchCarList()
    }


    render(){
        let lista

       //filtro de preco e nome   
         if ((this.state.valorMaximo ==='' || this.state.valorMaximo === 0) && 
            (this.state.valorMinimo ===''|| this.state.valorMinimo === 0) && this.state.valorBusca ===''){
             lista = this.state.cars
            
             
         }else{
             lista = this.state.cars.filter((carro)=>{
                 return (carro.price<=this.state.valorMaximo && carro.price>=this.state.valorMinimo) || (carro.name.toUpperCase() === this.state.valorBusca)
             })
         }
         console.log(lista)
         //Ordena os produtos
        switch (this.state.ordenaitens){
            case 'name':
                lista.sort(function(item1,item2){
                    const NomeA = item1.name.toUpperCase();
                    const NomeB = item2.name.toUpperCase();
                    if (NomeA === NomeB){
                        return 0;
                    }else if (NomeA < NomeB){
                        return -1;
                    } else {
                        return 1
                    }
                });
                break;
                
            case 'price' :
                lista.sort((item1,item2)=>{
                    return item1.price - item2.price})
                break
            case 'shipping' :
                lista.sort((item1,item2)=>{
                    return item1.shipping - item2.shipping})
                break    
        }
                   

        const renderProducts = lista.map((item) => {
            return (                                
                <ProductCard dados={item}/> 
        )})
        console.log(this.state.ordenaitens)

        return(
            <Fragment>
               
                <HeaderFuture 
                    pageCreateCar={this.props.pageCreateCar}
                    pageProduct={this.props.pageProduct} 
                    pageInitial={this.props.pageInitial}
                    />
                
                <Topo>
                <h3>Ordenar por:</h3>
                <select onClick={this.ordena}>
                    <option value="name">Título</option>
                    <option value="price">Valor de Venda</option>
                    <option value="shipping">Prazo de Entrega</option>
                </select>
                </Topo>
                <Main>
                    
                    <FiltroBox>
                        <Filter 
                            valorMaximo={this.state.valorMaximo} Maximo={this.onchangeMaximo}
                            valorMinimo={this.state.valorMinimo} Minimo={this.onchangeMinimo}
                            valorBusca={this.state.valorBusca} Busca={this.onchangeBusca}
                            LimparCampos={this.limparFiltros}
                        />
                    </FiltroBox>
                    <ProdBox>
                        {renderProducts}
                    </ProdBox>
                </Main>
            </Fragment>
        )
    }
}
