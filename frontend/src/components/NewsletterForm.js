import React from 'react'
import { RiMailSendLine } from "react-icons/ri"

const newsletterForm = (props) => (
  <form className="pz-newsletter-form" action="">
    {console.log('form ', props)}
    <div className="pz-newsletter-form-row-1">
      <input id="pz-newsletter-email-input" 
        type="email" 
        placeholder="enter your email"
        autoComplete="off"/>
      <div className="pz-newsletter-button-wrapper">
        <input id="pz-newsletter-button" type="submit" value={props.button_text} /> 
        <RiMailSendLine />
      </div>
    </div>
      <div className="pz-newsletter-form-row-2">
        <input id="pz-newsletter-agrement" type="checkbox" name="newsletter-agrement" />
        <label htmlFor="pz-newsletter-agrement">{props.agreement_phrase} <a href={props.policy_link.url}>{props.policy_link.phrase}</a>.</label>
      </div>
  </form>
)

export default newsletterForm

