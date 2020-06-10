import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import ContactDetails from './ContactDetails'

const ContactInfoCard = (props) => {
  const card = props.data.card[0]
  const {title, content, image, image_position} = card

  const ContactInfo = styled.div`
    display: flex;
    flex-direction: ${(image_position) => ( card.image_position === "right")  ? "row" : "row-reverse" }
  `

  const Image = styled.img`
    @media (max-width: 768px) {
      margin: 0
    }
    margin-${(image_position) => ( card.image_position === "right")  ? "left" : "right" }: 30px
  `

  return(
    <div className="pz-container-wrapper">
      <ContactInfo className="contact-info">
        <div className='contact-info__content'>
          <h4>Contact Info</h4>
          <ContactDetails />
        </div>
        <Image src={image.url}
          className='contact-info__image'/>
      </ContactInfo>
    </div>  
  )
}

export default ContactInfoCard
