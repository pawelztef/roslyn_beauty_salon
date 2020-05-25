import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default ({data}) => {
  console.log('CardGroup.render data', data)

  const cards = data.card.map((item) => {
    let serviceLink = `http://localhost:3000${item.link}`
    let imageLink = `http://localhost:1337${item.image.url}` 
    let [before, after] = item.subtitle.split(' ')
    return(
      <Col className="card__simple-offer">
        <a className="price-item" href={serviceLink}>
          <h3 className="price-item-title"
           style={{ 
             backgroundImage: `url("${imageLink}")`
           }}>
            {item.title} 
          </h3>
          <div className="price-item-price">
             <span className="price-item-price-before">{before}</span>
             <span className="price-item-price-after">{after}</span>
          </div>
        </a>
      </Col>
    )
  })
  // console.log('CardGroup.render cards', cards )

  return(
    <Container>
      <Row> {cards} </Row>
    </Container>
  )
}
