import React from 'react'
import styled from 'styled-components'
import ContactDetails from './ContactDetails'
import GoogleMap from './GoogleMap'
import EmptySpace from './EmptySpace'

const ContactInfoWithMap = (props) => {

  return(
    <>
      <div className="pz-container-wrapper">
        <div className="contact-info__map">
          <div className='contact-info__content'>
            <h4>Contact Info</h4>
            <ContactDetails {...props.contact_details}/>
          </div>
          <GoogleMap {...props.map_service} />
        </div>
      </div>  
      <EmptySpace />
    </>
  )
}

export default ContactInfoWithMap

