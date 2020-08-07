import React from 'react'
import { Button } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns'

class AppointmentForm extends React.Component {


  state = {
    appointmentDate: new Date(),
    appointmentTime: new Date()
    
  }

  handleDateChange = date => {
    this.setState({
      appointmentDate: date
    })
  }
  handleTimeChange = time => {
    this.setState({
      appointmentTime: time
    })
  }



  render() {
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
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={this.state.appointmentDate} onChange={this.handleDateChange} />
                  </MuiPickersUtilsProvider>
                </div>
                <div className="pz-appointment__form-input">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TimePicker 
                      value={this.state.appointmentTime} 
                      onChange={this.handleTimeChange} 
                      ampm={false}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>

            </div>
            {/* Section 1 End*/}

            {/* Section 2 Start */}
            <div className="pz-appointment__form-section">
              <div className="pz-appointment__form-input">
                <textarea id="appointment-message" 
                  name="appointment-message" 
                  placeholder="Your Message"
                >
                </textarea>
              </div>
            </div>
            {/* Section 2 End */}

          </div>
          {/* Row 1 End */}

          {/* Row 2 Start */}
          <div className="pz-appointment__form-row pz-appointment__row-2">
            <div className="pz-appointment__form-section">
              <label htmlFor="pz-appointment-agrement">
                <input id="pz-appointment-agrement" type="checkbox" name="appointment-agrement" />
                I have read and agree to the temrs & conditions.
              </label>
              <label htmlFor="pz-appointment-agrement">See our <a href="https://pawelztef.me">Privacy Policy</a>.</label>
            </div>
            <div className="pz-appointment__form-section">
              <button className="pz-btn">Submit</button>
            </div>
          </div>
          {/* Row 2 End */}

        </form>
      </div>
    )
  }
}

export default AppointmentForm
