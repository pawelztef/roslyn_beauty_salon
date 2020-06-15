import React from 'react'

const appointmentForm = () => {
  return(
    <div className="pz-appointment__form-wrapper">
      <form className="pz-appointment__form" >

{/* Row 1 Start */}
        <div className="pz-appointment__form-row pz-appointment__row-1">

{/* Section 1 Start */}
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
{/* Section 1 End*/}

{/* Section 2 Start */}
          <div className="pz-appointment__form-section">
            <div className="pz-appointment__form-input">
              <textarea id="appointment-message" 
                name="appointment-message" 
                rows="11" 
                cols="40"
                placeholder="Your Message"
              >
              </textarea>
            </div>
          </div>
{/* Section 2 End */}

        </div>
{/* Row 1 End */}

{/* Row 2 Start */}
        <div className="pz-appointment__form-row">
          <div className="pz-appintment__form-section">
          </div>
          <div className="pz-appintment__form-section">
          </div>
        </div>
{/* Row 2 End */}

      </form>
    </div>
  )
}

export default appointmentForm
