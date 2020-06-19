import React from 'react'
import EmptySpace from './EmptySpace'
import TeamThumbs from './TeamThumbs'

const team = props => {
  return(
    <div className="pz-container-wrapper">
      <EmptySpace />
      <h2 className="pz-section__header">Your Beauty Agents</h2>
      <div className="pz-section__content">
        <h2>Meet the best team of professionals</h2>
      </div>
      <EmptySpace small/>
      <TeamThumbs />
      <EmptySpace />
      <div className="pz-section__content">
        <button className="pz-btn">View all team</button>
      </div>
      <EmptySpace />
    </div>
  )
}

export default team
