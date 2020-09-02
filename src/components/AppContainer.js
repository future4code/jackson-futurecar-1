import React, { Component } from 'react'
import InitialPage from './InitialPage/InitialPage'
import PaginaCadastro from '../components/PaginaCadastro'

export class AppContainer extends Component {
  render() {
    return (
      <div>
       <InitialPage/> 
       <PaginaCadastro />
      </div>
    )
  }
}
