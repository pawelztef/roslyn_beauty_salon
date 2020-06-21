import React from 'react'
import EmptySpace from './EmptySpace'

const portfolio = props => {
  return(
    <div className="pz-portfolio__wrapper">
      <EmptySpace />
      <div class="pz-container-wrapper">
        <div className="pz-section__content">
          <button className="pz-btn">View all Pictures</button>
        </div>
        <EmptySpace />
      </div>
    </div>
  )
}

export default portfolio
