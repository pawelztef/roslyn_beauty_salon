import React from 'react'
import NewsletterForm from './NewsletterForm'
import EmptySpace from './EmptySpace'

const newsletter = (props) => (
  <div className="pz-newsletter__row">
    <div className="pz-container-wrapper">
      <EmptySpace small/>
      <div className="pz-newsletter__container">
        <div className="pz-newsletter__item">
          <h4>{props.title}</h4>
        </div>
        <div className="pz-newsletter__item">
          <NewsletterForm {...props} />
        </div>
      </div>
      <EmptySpace small/>
    </div>
  </div>
)

export default newsletter
