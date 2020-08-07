import React from 'react'

const Slider = (props) =>  {
  const {data} = props
  const item = data.item[0]
  const {image} = item
  return (
   <div className="pz-animated-banner">
      <img className="pz-animated-banner__item" 
           src={image.url} 
           alt={image.alternativeText}/>
      <div className="pz-animated-banner__item-top-layer">
        <div className="pz-animated-banner__item-title pz-script-font">{item.title}</div>
        <div className="pz-animated-banner__item-subtitle">{item.subtitle}</div>
        <p className="pz-btn">View Our Services</p>
      </div>
   </div>
  )
}


export default Slider
