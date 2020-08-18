import React from 'react'
import EmptySpace from './EmptySpace'
import ServicesList from './ServicesList'

const services = props => {
  console.log('services props ', props)
  return(
    <div className="pz-services__wrapper">
      <EmptySpace />
      <div className="pz-container-wrapper">
        <div className="pz-services__container">
          <h2 className="pz-section__header">Choose the service you need</h2>
        </div>
        <ServicesList />
        <EmptySpace />
        <div className="pz-section__content">
          <button className="pz-btn">View all Services</button>
        </div>
        <EmptySpace />
      </div>
    </div>
  )
}

export default services
