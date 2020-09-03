import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import ContactDetails from './ContactDetails'

const ContactInfoCard = (props) => {
  const {contact_details, image} = props.data

  const ContactInfo = styled.div`
    display: flex;
    flex-direction: "row";
  `

  const Image = styled.img`
    @media (max-width: 768px) {
      margin: 0;
    }
    margin-left: 30px;
  `

  return(
    <div className="pz-container-wrapper contact-info">
      <ContactInfo>
        <div className='contact-info__content'>
          <h4>Contact Info</h4>
          <ContactDetails {...contact_details}/>
        </div>
        <Image src={process.env.REACT_APP_DOMAIN + image.url}
          className='contact-info__image'/>
      </ContactInfo>
    </div>  
  )
}

export default ContactInfoCard
