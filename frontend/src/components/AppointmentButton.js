import React from 'react'
import {Link} from 'react-router-dom'

export default function AppointmentButton(props) {
  return(
  <Link className="pz-btn pz-nav__appointment-button pz-invisible-lg"
        to={props.url}>{props.phrase}</Link>
  )
}
