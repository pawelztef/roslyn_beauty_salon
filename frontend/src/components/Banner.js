import React from 'react'
import EmptySpace from './EmptySpace'

const Banner = (props) => {
  const {title, subtitle, call_to_action, image} = props
  const subtitleParts = subtitle.split(" ")
  return(
    <div  className="pz-container-wrapper">
      <div className="pz-row">
        <div> 
          <div className="banner__wrapper">
            <div className="banner__item"
              style={{ 
                backgroundImage: `url(${process.env.REACT_APP_DOMAIN+image.url})`
              }}>
                <div className="banner__item-top-layer-mask">
                  <div className="banner__item-top-layer">
                    <div className="banner__item-title">{title}</div>
                    <div className="banner__item-subtitle">
                      <span className="pz-script-font">{subtitleParts[0]}</span>
                      <span>{subtitleParts[1]}</span>
                    </div>
                    <a href={call_to_action.url} className="pz-btn">{call_to_action.phrase}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EmptySpace />
        </div>
      </div>
  )
}

export default Banner
