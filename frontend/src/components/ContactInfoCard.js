import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

const ContactInfoCard = (props) => {
  const card = props.data.card[0]
  console.log('ContactInfoCard.render card', card)
  const {title, content, image, image_position} = card
  console.log('ContactInfoCard.render title', title)
  console.log('ContactInfoCard.render content', content)
  console.log('ContactInfoCard.render image', image)

  const ContactInfo = styled.div`
    display: flex;
    flex-direction: ${(image_position) => ( card.image_position === "right")  ? "row" : "row-reverse" }
  `

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
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
        <Content className='contact-info__content'>
          <h4>{title}</h4>
          { parse(content) }   
        </Content>
        <Image src={image.url}
               className='contact-info__image'/>
      </ContactInfo>
    </div>  
  )
}

export default ContactInfoCard
