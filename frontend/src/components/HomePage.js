import React from 'react'
import renderComponents from '../componentsMapping'

class HomePage extends React.Component {

  render() {
    const components  = this.props.components
    return(
      <div className="pz-page-container-wrapper">
        {components &&
            renderComponents(components)
        }

      </div>
    )
  }
}

export default HomePage
