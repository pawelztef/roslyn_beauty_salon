import React from 'react'



export default class contactDetails extends React.Component {
  render() {
    const { company_name, address, mobile_phone, office_phone, email } = this.props
    return(
      <div className="">
        <address className='pz-contact-details'>
          <div className="pz-contact-details__address">
            {address &&
            <>
              <h6>Address</h6>
              {company_name && 
              <span>
                {company_name}
              </span>
              }
              <span>
                {this.props.address}
              </span>
            </>
            }
          </div>
          {email && 
          <div className="pz-contact-details__email">
            <h6>Email</h6>
            <span>
              <a href={"mailto:"+email}>{email}</a>
            </span>
          </div>
          }
          {(mobile_phone || office_phone) &&
          <div className="pz-contact-details__phone">
            <h6>Phone</h6>
            {mobile_phone && 
            <span>
              <a href={"tel:"+mobile_phone}>{mobile_phone}</a>
            </span>
            }
            {office_phone && 
            <span>
              <a href={"tel:"+office_phone}>{office_phone}</a>
            </span>
            }
          </div>
          }
        </address>
      </div>
    )
  }

}

