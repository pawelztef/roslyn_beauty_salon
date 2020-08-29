import React from 'react'
import EmptySpace from './EmptySpace'

const Slider = (props) =>  {
  const heroEntries = props.hero_item
  return (
    <div> 
      {heroEntries &&
        heroEntries.map((entry) => {
          const {id, title, subtitle, call_to_action, image } = entry
          return(
            <div key={id} className="pz-animated-banner">
                  <img className="pz-animated-banner__item" 
                    src={process.env.REACT_APP_DOMAIN+image.url} 
                       alt={image.alternativeText}/>
                  <div className="pz-animated-banner__item-top-layer">
                    <div className="pz-animated-banner__item-title pz-script-font">{title}</div>
                    <div className="pz-animated-banner__item-subtitle">{subtitle}</div>
                    <a className="pz-btn" href={call_to_action.url}>{call_to_action.phrase}</a>
                  </div>
             </div>
          )
        })
      }
      <EmptySpace />
    </div>
  )
}


export default Slider
