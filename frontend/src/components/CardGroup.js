import React from 'react'
import EmptySpace from './EmptySpace'

export default function CardGroup({data}) {

  const cards = data.card.map((item, key) => {
    let serviceLink = `http://localhost:3000${item.link}`
    // let imageLink = `http://localhost:1337${item.image.url}` 
    let imageLink = item.image.url
    let [before, after] = item.subtitle.split(' ')

    return(
      <div key={key} className="card__simple-offer">
        <div className="price-item"
          style={{ 
            backgroundImage: `url("${imageLink}")`
          }}>
            <a className="price-item-link" href={serviceLink}>
              <h3 className="price-item-title">
                <span>
                  {item.title} 
                </span>
              </h3>
              <div className="price-item-price">
                <span className="price-item-price-before pz-script-font">{before}</span>
                <span className="price-item-price-after">{after}</span>
              </div>
            </a>
          </div>
        </div>
    )
  })

  return(
    <div className="pz-container-wrapper">
      <div className="pz-row">
        <EmptySpace />
        <div className="pz-container"> 
          <div className="card__wrapper">
            {cards} 
          </div>
        </div>
        <EmptySpace />
      </div>
    </div>
  )
}
