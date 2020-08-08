import React from 'react'



export default class contactDetails extends React.Component {
  render() {
    return(
      <address className='pz-contact-details'>
        <div className="pz-contact-details__address">
          <h6>{this.props.company_name}</h6>
          <span>
            {this.props.address}
          </span>
        </div>
        <div className="pz-contact-details__email">
          <h6>Email</h6>
          <span>
            <a href={"mailto:"+this.props.email}>{this.props.email}</a>
          </span>
        </div>
        <div className="pz-contact-details__phone">
          <span>
            <h6>Phone</h6>
            <a href={"tel:"+this.props.mobile_phone}>{this.props.mobile_phone}</a>
          </span>
          <span>
            <a href={"tel:"+this.props.office_phone}>{this.props.office_phone}</a>
          </span>
        </div>
      </address>
    )
  }

}

