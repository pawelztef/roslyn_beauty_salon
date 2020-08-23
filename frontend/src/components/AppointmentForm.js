import React from 'react'
import Axios from 'axios'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns'
import SimpleReactValidator from 'simple-react-validator'
import FeedbackMessage from './FeedbackMessage'


class AppointmentForm extends React.Component {

  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator()
    this.state = {
      firstName: "",
      secondName: "",
      phone: "",
      appointmentDate: new Date(),
      appointmentTime: new Date(), 
      message: "",
      agree: false,
      open: false,
      feedbackMessage: ""
    }
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
    console.log(this.state)
  }

  handleAgrement = event => {
    this.setState({
      agree: event.target.checked
    })
  }

  handleChange = (event) => {
    let nam = event.target.name
    let val = event.target.value
    this.setState({[nam]: val})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    if(this.validator.allValid()) {
      try {
        await Axios.post(process.env.REACT_APP_DOMAIN+"/appointment-form-leads", {
          first_name: this.state.firstName,
          second_name: this.state.secondName,
          phone: this.state.phone,
          message: this.state.message,
          date: this.state.appointmentDate.toJSON().substr(0, 10),
          time: this.state.appointmentTime.toJSON().substr(11, 12)
        })
        document.getElementById('appointmentForm').reset()
        this.setState({open: true, message: "Your message has been sent. We will contact with you promptly."})
      } catch (error) {
        console.log(error);
      }
    } else {
      this.validator.showMessages()
      this.forceUpdate()
    }
  }
 
  closeHandler = () => {
    this.setState({open: false, message: ""})
  }

  render() {
    return(
      <div className="pz-appointment__form-wrapper">
        <form id="appointmentForm" className="pz-appointment__form" onSubmit={this.handleSubmit} >

          {/* Row 1 Start */}
          <div className="pz-appointment__form-row pz-appointment__row-1">

            {/* Section 1 Start */}
            <div className="pz-appointment__form-section">

              <div className="pz-appointment__form-row ">
                <div className="pz-appointment__form-input">
                  <input type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />
                  {this.validator.message('firstName', this.state.firstName, 'required|alpha')}
                </div>
                <div className="pz-appointment__form-input">
                  <input type="text" 
                    id="secondName" 
                    name="secondName"
                    placeholder="Second Name"
                    onChange={this.handleChange}
                  />
                  {this.validator.message('secondName', this.state.secondName, 'required|alpha')}
                </div>
              </div>

              <div className="pz-appointment__form-row">
                <div className="pz-appointment__form-input">
                  <input type="text" 
                    id="phone" 
                    name="phone"
                    placeholder="Your Phone"
                    onChange={this.handleChange}
                  />
                  {this.validator.message('phone', this.state.phone, 'required|phone')}
                </div>
              </div>

              <div className="pz-appointment__form-row">
                <div className="pz-appointment__form-input">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker 
                      id="date"
                      name="date"
                      value={this.state.appointmentDate} 
                      onChange={this.handleDateChange} 
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div className="pz-appointment__form-input">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TimePicker 
                      id="time"
                      name="time"
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
                  id="message" 
                  name="message" 
                  placeholder="Your Message"
                  onChange={this.handleChange} 
                >
                </textarea>
                {this.validator.message('message', this.state.message, 'required|min:20|max:920')}
              </div>
            </div>
            {/* Section 2 End */}

          </div>
          {/* Row 1 End */}

          {/* Row 2 Start */}
          <div className="pz-appointment__form-row pz-appointment__row-2">
            <div className="pz-appointment__form-section">
              <label htmlFor="pz-appointment-agrement">
                <input 
                  id="agree" 
                  type="checkbox" 
                  name="agree"
                  checked={this.state.agree}
                  onChange={this.handleAgrement}
                />
               {this.props.agreement_phrase}
              <a href={this.props.policy_link.url}> {this.props.policy_link.phrase}</a>.</label>
              {this.validator.message('agree', this.state.agree, 'accepted')}
            </div>
            <div className="pz-appointment__form-section">
              <button className="pz-btn">{this.props.button_text}</button>
            </div>
          </div>
          {/* Row 2 End */}

        </form>

        <FeedbackMessage open={this.state.open} message={this.state.message} closeHandler={this.closeHandler} />

      </div>
    )
  }
}

export default AppointmentForm
