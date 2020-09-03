import React, { Component } from 'react'
import ProductCard from './ProductCard/ProductCard'
import { PaginaProdutos } from './PaginaProdutos'
import { RaphaelLayoutTeste } from './RaphaelLayoutTeste'
import PaginaCadastro from '../components/PaginaCadastro'
import { Filter } from './Filter'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <ProductCard/>
        <RaphaelLayoutTeste></RaphaelLayoutTeste>
        {/*<Filter />
        <PaginaCadastro />*/}
      </div>
    )
  }
}
;