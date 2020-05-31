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
    <div className="pz-row welcome__wrapper">
        <EmptySpace />
        <div className="pz-container-wrapper">
          <div className="welcome__section">
            <h2 className="welcome__title pz-script-font">{firstComponent.title}</h2>
            <div className="welcome__content">{firstComponent.content}</div>
          </div>
        </div>
        <ContactInfoCard />
    </div>
  )
}

export default Welcome
