import React from 'react'
import AppointmentForm from './AppointmentForm'

const appointment = () => {
  return(
    <div className="pz-appointment__wrapper">
      <div className="pz-container-wrapper">
        <div className="pz-appointment__container">
          <h2 className="pz-appointment-header pz-script-font">Make an appointment today</h2>
          <AppointmentForm />
        </div>
      </div>
    </div>
  )
}

export default appointment
