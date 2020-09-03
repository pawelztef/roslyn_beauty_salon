import React from 'react'
import Axios from 'axios'
import EmptySpace from './EmptySpace'
import SimpleReactValidator from 'simple-react-validator'
import Snackbar from '@material-ui/core/Snackbar'
import FeedbackMessage from './FeedbackMessage'

class ContactForm extends React.Component {

  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator()
    this.state = {
      first_name: "",
      second_name: "",
      email: "",
      message: "",
      agree: false,
      open: false,
      feedbackMessage: ""
    }
  }

  handleChange = event => {
    let nam = event.target.name
    let val = event.target.value
    this.setState({ [nam]: val })

  }

  handleAgrement = event => {
    this.setState({ agree: event.target.checked })
  }

  handleClose = () => {
    this.setState({ open: false, message: "" })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    if(this.validator.allValid()) {
      try {
        await Axios.post(process.env.REACT_APP_DOMAIN+"/contact-form-leads", {
          first_name: this.state.firstName,
          second_name: this.state.secondName,
          email: this.state.email,
          message: this.state.message
        })
        document.getElementById('contactFrom').reset()
        this.setState({
          open: true, 
          message: "Thank you for your interesting in our service. We will contact with you promptly."
        })
      } catch (error) {
        console.log(error)
      }
    } else {
      this.validator.showMessages()
      this.forceUpdate()
    }
  }


  render() {
    return(
      <>
        <div className="pz-appointment__wrapper pz-contact-form">
          <div className="pz-container-wrapper">
            <div className="pz-appointment__container">
              <h2 className="pz-section__header">{this.props.title}</h2>
              <div className="pz-appointment__form-wrapper">
                <form id="contactFrom" className="pz-appointment__form" onSubmit={this.handleSubmit} >

                  {/* Row 1 Start */}
                  <div className="pz-appointment__form-row pz-appointment__row-1">

                    {/* Section 1 Start */}
                    <div className="pz-appointment__form-section">

                      <div className="pz-appointment__form-row ">
                        <div className="pz-appointment__form-input">
                          <input type="text" 
                            id="appointment-frist-name" 
                            name="firstName" 
                            placeholder="First Name"
                            onChange={this.handleChange}
                          />
                          {this.validator.message('firstName', this.state.firstName, 'required|alpha')}
                        </div>
                        <div className="pz-appointment__form-input">
                          <input type="text" 
                            id="appointment-second-name" 
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
                            id="appointment-phone" 
                            name="email"
                            placeholder="Your Email"
                            autoComplete="off"
                            onChange={this.handleChange}
                          />
                          {this.validator.message('email', this.state.email, 'required|email')}
                        </div>
                      </div>



                    </div>
                    {/* Section 1 End*/}

                    {/* Section 2 Start */}
                    <div className="pz-appointment__form-section">
                      <div className="pz-appointment__form-input">
                        <textarea id="appointment-message" 
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
                          id="pz-appointment-agrement" 
                          type="checkbox" 
                          name="agree"
                          onChange={this.handleAgrement}
                        />
                        {this.props.agreement_phrase} See our <a href={this.props.policy_link.url}>{this.props.policy_link.phrase}</a>.
                      </label>
                      {this.validator.message('agree', this.state.agree, 'accepted')}
                    </div>
                    <div className="pz-appointment__form-section">
                      <button className="pz-btn">{this.props.button_text}</button>
                    </div>
                  </div>
                  {/* Row 2 End */}

                </form>
                <FeedbackMessage open={this.state.open} message={this.state.message} closeHandler={this.handleClose} />
              </div>
            </div>
          </div>
        </div>
        <EmptySpace />
      </>

    )
  }
}

export default ContactForm
