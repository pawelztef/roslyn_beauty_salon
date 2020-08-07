import React from 'react'
import EmptySpace from './EmptySpace'

const Banner = (props) => {
  const {data} = props
  const item = data.card[0]
  const {title, subtitle, link, image} = item
  const [subtitleFirstHalf, subtitleSecondHalf] = item.subtitle.split(' ')
  return(
    <div className="pz-container-wrapper">
      <div className="pz-row">
        <div> 
          <div className="banner__wrapper">
            <div className="banner__item"
              style={{ 
                backgroundImage: `url(${image.url})`
              }}>
                <div className="banner__item-top-layer-mask">
                  <div className="banner__item-top-layer">
                    <div className="banner__item-title">{title}</div>
                    <div className="banner__item-subtitle">
                      <span className="pz-script-font">{subtitleFirstHalf}</span>
                      <span>{subtitleSecondHalf}</span>
                    </div>
                    <a href={link} className="pz-btn">more details</a>
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
