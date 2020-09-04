import React, { Component } from 'react'
//import MediaCard from '../components/card/card'
//import ProductCard from './ProductCard/ProductCard'
import { PaginaProdutos } from './PaginaProduto/PaginaProdutos'
//import { RaphaelLayoutTeste } from './RaphaelLayoutTeste'
import PaginaCadastro from './PaginaCadastro/PaginaCadastro'
//import { Filter } from './Filter/Filter'
import InitialPage from './InitialPage/InitialPage'


export class AppContainer extends Component {
  state = {
    page: "initialPage"
  }

  ClickInitial = () => {
    this.setState({page: "initialPage"})
  }

  ClickComprador = () => {
    this.setState({page: "pageProduct"})
  }

  ClickVendedor = () => {
    this.setState({page: "pageCreateCar"})
  }

  mudarTela = () => {
    switch(this.state.page){
      case "initialPage": 
        return <InitialPage pageCreateCar={() => this.ClickComprador()}  pageProduct={() => this.ClickVendedor()}/>
      case "pageProduct": 
        return <PaginaProdutos voltar={() => this.ClickInitial() } />
      case "pageCreateCar":
        return <PaginaCadastro voltar={() => this.ClickInitial() } />
    }
  }

  render() {
    return (
      this.mudarTela()
    )
  }
}
;