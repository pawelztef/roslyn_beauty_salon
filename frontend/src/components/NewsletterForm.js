import React from 'react'

const newsletterForm = () => (
  <form className="pz-newsletter-form" action="">
    <div className="pz-newsletter-form-row-1">
      <input id="pz-newsletter-email-input" 
        type="email" 
        placeholder="enter your email"
        autocomplete="off"/>
      <input id="pz-newsletter-button" type="submit" value="submit" />
    </div>
    <div className="pz-newsletter-form-row-2">
      <input id="pz-newsletter-agrement" type="checkbox" name="newsletter-agrement" />
      <label for="pz-newsletter-agrement">I have read and agree to the temrs & conditions.</label>
      <label for="pz-newsletter-agrement">See our <a href="https://pawelztef.me">Privacy Policy</a>.</label>
    </div>
  </form>
)

export default newsletterForm

