import React from 'react'
import Axios from 'axios'
import SimpleReactValidator from 'simple-react-validator'
import FeedbackMessage from './FeedbackMessage'
import { RiMailSendLine } from "react-icons/ri"

class NewsletterForm extends React.Component {

  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator()
    this.state = {
      email: "",
      newsletterAgrement: false,
      open: false,
      feedbackMessage: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleAgrement = (event) => {
    this.setState({
      newsletterAgrement: event.target.checked
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    if(this.validator.allValid()) {
      try {
        await Axios.post(process.env.REACT_APP_DOMAIN+"/newsletter-leads", {
          email: this.state.email
        })
        document.getElementById('newsletterForm').reset()
        this.setState({open: true,
          message: "Thank You. Your email has been placed on our newsletter list."
        })
      } catch (error) {
        console.log(error)
      }
    } else {
      this.validator.showMessages()
      this.forceUpdate()
    }
  } 

  handleClose = () => {
    this.setState({open: false, message: ""}) 
  }

  render() {
    return(
      <form id="newsletterForm" className="pz-newsletter-form" onSubmit={this.handleSubmit}>
        {console.log('form ', this.props)}
        <div className="pz-newsletter-form-row-1">
          <input id="pz-newsletter-email-input" 
            name="email"
            placeholder="enter your email"
            autoComplete="off"
            onChange={this.handleChange}
          />
          <div className="pz-newsletter-button-wrapper">
            <input id="pz-newsletter-button" type="submit" value={this.props.button_text} /> 
            <RiMailSendLine />
          </div>
        </div>
        {this.validator.message('email', this.state.email, 'required|email')}
        <div className="pz-newsletter-form-row-2">
          <input 
            id="newsletterAgrement" 
            type="checkbox" 
            name="newsletterAgrement"  
            checked={this.state.newsletterAgrement}
            onChange={this.handleAgrement}
          />
          <label htmlFor="pz-newsletter-agrement"> {this.props.agreement_phrase} <a href={this.props.policy_link.url}>{this.props.policy_link.phrase}</a>.</label>
        </div>

        {this.validator.message('newsletterAgrement', this.state.newsletterAgrement, 'accepted')}
        <FeedbackMessage open={this.state.open} message={this.state.message} closeHandler={this.handleClose} />
      </form>
    )
  }
}
export default NewsletterForm

