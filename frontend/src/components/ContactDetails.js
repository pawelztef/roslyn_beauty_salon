import React from 'react'

const contactDetails = props => (
  <address className='pz-contact-details'>
    <div className="pz-contact-details__address">
      <h6>Address</h6>
      <span>
        8500, Lorem Street,
      </span>
      <span>
        Chicago, IL, 55030
      </span>
    </div>
    <div className="pz-contact-details__email">
      <h6>Email</h6>
      <span>
        <a href="mailto:sales@example.com">sales@example.com</a>
      </span>
    </div>
    <div className="pz-contact-details__phone">
      <span>
        <h6>Phone</h6>
        <a href="tel:1234567890">(123) 456-78-90</a>
      </span>
      <span>
        <a href="tel:1234567890">(123) 456-78-90</a>
      </span>
    </div>
  </address>
)

export default contactDetails
