import React from 'react'
import EmptySpace from './EmptySpace'

const Banner = (props) => {
  const {data} = props
  console.log('Banner.render data', data)
  const item = data.card[0]
  const {title, subtitle, link, image} = item
  const [subtitleFirstHalf, subtitleSecondHalf] = item.subtitle.split(' ')
  console.log('Banner.render title', title)
  console.log('Banner.render subtitle', subtitle)
  console.log('Banner.render link', link)
  console.log('Banner.render image', image)
  return(
    <div className="pz-row">
      <div className="pz-container">
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
                <a href={link} className="pz-btn banner__item-call-to-action">more details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmptySpace />
    </div>
  )
}

export default Banner
