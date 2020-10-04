import React from 'react'
import ContactDetails from './ContactDetails'
import EmptySpace from './EmptySpace'



export default class PlainContactDetails extends React.Component {
  render() {
    return(
      <>
        <EmptySpace />
        <div className="pz-contact-page pz-contact-details">
          <ContactDetails {...this.props} />
        </div>
      </>
    )
  }

}

