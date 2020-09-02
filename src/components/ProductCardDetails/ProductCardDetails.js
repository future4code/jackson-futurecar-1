import React, { Component, useState } from 'react'
import Button from '@material-ui/core/Button';
import StyleDetails from './DetailsStyled'
 
class CardDetails extends React.Component {
  state = {
    toggle: false
  }

  render () {
  const handleToggle = () => {
    this.setState({toggle:!this.state.toggle})
  }
    return (
      <>
        <Button onClick={handleToggle}>+ Detalhes</Button>
        <StyleDetails visibility={this.state.toggle}>{this.props.details}</StyleDetails>
      </>
    )
  }
}

export default CardDetails