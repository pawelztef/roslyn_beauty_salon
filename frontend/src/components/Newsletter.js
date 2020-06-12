import React from 'react'
import NewsletterForm from './NewsletterForm'

const newsletter = () => (
  <div className="pz-newsletter__row">
    <div class="pz-container-wrapper">
      <div className="pz-newsletter__container">
        <div className="pz-newsletter__item">
          <h4>Stay tuned with updates</h4>
        </div>
        <div className="pz-newsletter__item">
          <NewsletterForm />
        </div>
      </div>
    </div>
  </div>
)

export default newsletter
