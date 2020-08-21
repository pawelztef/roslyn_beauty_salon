import React from 'react'
import Axios from 'axios'
import SimpleReactValidator from 'simple-react-validator'
import FeedbackMessage from './FeedbackMessage'
import { RiMailSendLine } from "react-icons/ri"

class NewsletterForm extends React.Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    return(
      <form className="pz-newsletter-form" action="">
        {console.log('form ', thisprops)}
        <div className="pz-newsletter-form-row-1">
          <input id="pz-newsletter-email-input" 
            type="email" 
            placeholder="enter your email"
            autoComplete="off"/>
          <div className="pz-newsletter-button-wrapper">
            <input id="pz-newsletter-button" type="submit" value={this.props.button_text} /> 
            <RiMailSendLine />
          </div>
        </div>
        <div className="pz-newsletter-form-row-2">
          <input id="pz-newsletter-agrement" type="checkbox" name="newsletter-agrement" />
          <label htmlFor="pz-newsletter-agrement">{this.props.agreement_phrase} <a href={this.props.policy_link.url}>{this.props.policy_link.phrase}</a>.</label>
        </div>
      </form>
    )
  }
  export default NewsletterForm

