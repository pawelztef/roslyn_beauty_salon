import React from 'react'
import EmptySpace from './EmptySpace'

const services = props => {
  return(
    <div className="pz-services__wrapper">
      <EmptySpace />
      <div class="pz-container-wrapper">
        <div className="pz-services__container">
          <h2 className="pz-section__header">Choose the service you need</h2>
        </div>
      </div>
      <EmptySpace />
    </div>
  )
}

export default services
