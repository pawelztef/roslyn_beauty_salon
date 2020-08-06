import React from 'react'
import Axios from 'axios'
import ContactDetails from './ContactDetails'
import Brand from './Brand'
import SocialList from './SocialList'


export default class Footer extends React.Component {


  state = {
    menu: {},
    social_media: [],
    contact_details: {},
    logo: {}
  }

  async componentDidMount() {
    const response = await Axios.get('http://localhost:1337/footer')
    const { menu, social_media, contact_details, logo } = response.data[0]
    this.setState({menu, social_media, contact_details, logo})

    console.log('state.logo', this.state.logo)
  }


  render() {
    return(
      <div className="pz-container-wrapper">
        <footer className="pz-footer">
          <div className="pz-footer__col-1">
            <ContactDetails />
          </div>
          <div className="pz-footer__col-2">
            <Brand />
            <div className="pz-footer-meta">
              <span>
                <a href="https://pawelztef.me">Pawelztef</a>© 2020
              </span>
              <span>
                All rights reserved
              </span>
            </div>
            <SocialList />
          </div>
          <div className="pz-footer__col-3">
            <div className="pz-footer__legal">
              <span className="pz-footer__legal-item">
                <a href="http://pawelztef.me">Privacy Policy</a>
              </span>
              <span className="pz-footer__legal-item">
                <a href="http://pawelztef.me">Cookies Policy</a>
              </span>
              <span className="pz-footer__legal-item">
                <a href="http://pawelztef.me">Terms And Conditions</a>
              </span>
              <span className="pz-footer__legal-item">
                <a href="http://pawelztef.me">Refund Policy</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}


