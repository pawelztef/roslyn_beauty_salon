import React from 'react'
import EmptySpace from './EmptySpace'
import TeamThumbs from './TeamThumbs'

const team = props => {
  return(
    <div className="pz-container-wrapper">
      <EmptySpace />
      <h2 className="pz-section__header">Your Beauty Agents</h2>
      <div className="pz-section__content">
        Adipisicing atque sequi ducimus delectus quam Nemo alias quas totam temporibus odio. Consequatur iusto eos repudiandae totam magnam Adipisci veniam omnis temporibus harum ad maiores eius aspernatur Reiciendis expedita quos.
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
