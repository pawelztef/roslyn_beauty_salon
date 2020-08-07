import React from 'react'
import EmptySpace from './EmptySpace'

const portfolio = props => {
  return(
    <div className="pz-portfolio__wrapper">
      <EmptySpace />
      <div className="pz-portfolio__container">
        <div className="pz-portfolio__container-item">
          <img src="http://muji.ancorathemes.com/wp-content/uploads/2017/12/gallery-14-copyright.jpg" alt="" />
        </div>
        <div className="pz-portfolio__container-item pz-invisible-sm">
          <img src="http://muji.ancorathemes.com/wp-content/uploads/2017/12/gallery-17-copyright.jpg" alt="" />
        </div>
        <div className="pz-portfolio__container-item pz-invisible-sm">
          <img src="http://muji.ancorathemes.com/wp-content/uploads/2017/12/gallery-16-copyright.jpg" alt="" />
        </div>
        <div className="pz-portfolio__container-item pz-invisible-sm">
          <img src="http://muji.ancorathemes.com/wp-content/uploads/2017/12/gallery-15-copyright.jpg" alt="" />
        </div>
      </div>
      <EmptySpace small />
      <div className="pz-container-wrapper">
        <div className="pz-section__content">
          <button className="pz-btn">View all Pictures</button>
        </div>
        <EmptySpace />
      </div>
    </div>
  )
}

export default portfolio
