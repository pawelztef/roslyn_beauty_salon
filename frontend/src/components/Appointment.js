import React from 'react'
import AppointmentForm from './AppointmentForm'
import EmptySpace from './EmptySpace'

const appointment = (props) => {
  return(
    <>
      <div className="pz-appointment__wrapper">
        <div className="pz-container-wrapper">
          <div className="pz-appointment__container">
            <h2 className="pz-section__header">{props.title}</h2>
            <AppointmentForm {...props}/>
          </div>
        </div>
      </div>
      <EmptySpace />
    </>
  )
}

export default appointment
