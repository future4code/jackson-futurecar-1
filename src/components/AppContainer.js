import React, { Component } from 'react'
import ProductCard from './ProductCard/ProductCard'
import PaginaCadastro from '../components/PaginaCadastro'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <ProductCard/>

        
        
        <PaginaCadastro />
      </div>
    )
  }
}
;