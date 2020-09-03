import React, { Component} from 'react'
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
        <button onClick={handleToggle}>+ Detalhes</button>
        <StyleDetails visibility={this.state.toggle}>{this.props.details}</StyleDetails>
      </>
    )
  }
}

export default CardDetails