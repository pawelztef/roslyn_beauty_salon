import React from 'react'
import EmptySpace from './EmptySpace'
import ContactInfoCard from './ContactInfoCard'

const Welcome = (props) => {
  console.log('Welcome.render props', props)
  const {data} = props
  console.log('Welcome.render data', data)
  const firstComponent = data[0]
  const secondComponent = data[1]
  console.log('Welcome.render component 1', firstComponent)
  console.log('Welcome.render component 2', secondComponent)

  return (
    <React.Fragment>
	<div className="pz-row welcome__wrapper">
	    <EmptySpace />
	    <div className="pz-container-wrapper">
		<h2 className="pz-section__header">{firstComponent.title}</h2>
		<div className="pz-section__content">{firstComponent.content}</div>
	    </div>
	    <EmptySpace />
	    <EmptySpace />
	</div>
	<ContactInfoCard data={secondComponent}/>
    </React.Fragment>
  )
}

export default Welcome
