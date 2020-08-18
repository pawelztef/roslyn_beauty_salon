import React from 'react'
import EmptySpace from './EmptySpace'

export default function CardGroup(props) {

  const bannerEntries = props.entry

  
  const cards = bannerEntries.map((entry) => {
    const {treatment: {id, name, price}} = entry
    return(
      <div key={id} className="card__simple-offer">
        <div className="price-item">
            <a className="price-item-link">
              <h3 className="price-item-title">
                <span>
                  {name} 
                </span>
              </h3>
              <div className="price-item-price">
                <span className="price-item-price-before pz-script-font"></span>
                <span className="price-item-price-after">{price}€</span>
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
