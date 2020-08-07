import React from 'react'
import Newsletter from './Newsletter'
import Appointment from './Appointment'
import Team from './Team'

class TeamPage  extends React.Component {
  render() {
    return(
      <div className="pz-page-container-wrapper">
        <Team />
        <Appointment />
        <Newsletter />
      </div>
    )
  }
}

export default TeamPage 

