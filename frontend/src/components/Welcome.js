import React from 'react'
import EmptySpace from './EmptySpace'
import ContactInfoCard from './ContactInfoCard'

const Welcome = (props) => {
  const {title, description, contact_details, image} = props

  return (
    <div>
	<div className="pz-row welcome__wrapper pz-hr-pd">
	    <div className="pz-container-wrapper">
		<h2 className="pz-section__header">{title}</h2>
		<div className="pz-section__content">{description}</div>
	    </div>
	</div>
	<ContactInfoCard data={{contact_details, image}}/>
	<EmptySpace />
    </div>
  )
}

export default Welcome
