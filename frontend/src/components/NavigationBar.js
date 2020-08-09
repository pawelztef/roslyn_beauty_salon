import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'



class NavigationBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header className="pz-nav">
        <TopNav /> 
        <BottomNav mobileMenuToggleHandler={this.props.mobileMenuToggleHandler} /> 
      </header>
    )
  }
}

export default NavigationBar
