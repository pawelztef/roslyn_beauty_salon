import React from 'react'

const appointmentForm = () => {
  return(
    <div className="pz-appointment__form-wrapper">
      <form className="pz-appointment__form" >
        <div className="pz-appointment__form-row pz-appointment__row-1">
          <div className="pz-appointment__form-section">
            <div className="pz-appointment__form-row ">
              <div className="pz-appointment__form-input">
                <input type="text" 
                  id="appointment-frist-name" 
                  name="appointment-frist-name" 
                  placeholder="First Name"
                />
              </div>
              <div className="pz-appointment__form-input">
                <input type="text" 
                  id="appointment-second-name" 
                  name="appointment-second-name"
                  placeholder="Second Name"
                />
              </div>
            </div>
            <div className="pz-appointment__form-row">
              <div className="pz-appointment__form-input">
                <input type="text" 
                  id="appointment-phone" 
                  name="appointment-phone"
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <div className="pz-appointment__form-row">
              <div className="pz-appointment__form-input">
                <input type="text" 
                  id="appointment-date" 
                  name="appointment-date"
                  placeholder="Date"
                />
              </div>
              <div className="pz-appointment__form-input">
                <input type="text" 
                  id="appointment-time" 
                  name="appointment-time"
                  placeholder="Time"
                />
              </div>
            </div>
          </div>
          <div className="pz-appointment__form-section">
            <div className="pz-appintment__form-input">
              <textarea id="w3review" name="w3review" rows="10" cols="40">
                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. 
              </textarea>
            </div>
          </div>
        </div>
        <div className="pz-appointment__form-row">
          <div className="pz-appintment__form-section">
          </div>
          <div className="pz-appintment__form-section">
          </div>
        </div>
      </form>
    </div>
  )
}

export default appointmentForm
