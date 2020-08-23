import React from 'react'
import ContactDetails from './ContactDetails'
import EmptySpace from './EmptySpace'



export default class PlainContactDetails extends React.Component {
  render() {
    return(
      <div className="pz-contact-page">
        <EmptySpace />
        <ContactDetails {...this.props} />
        <EmptySpace />
      </div>
    )
  }

}

