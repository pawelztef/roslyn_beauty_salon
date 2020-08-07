import React from 'react'
import Axios from 'axios'
import ContactDetails from './ContactDetails'
import Brand from './Brand'
import SocialList from './SocialList'
import {Link} from 'react-router-dom'


export default class Footer extends React.Component {


  state = {
    menu: {},
    social_media: [],
    contact_details: {},
    logo: {},
    isLoading: true
  }

  async componentDidMount() {
    const response = await Axios.get('http://localhost:1337/footer')
    const { menu, social_media, contact_details, logo } = response.data[0]
    this.setState({menu, social_media, contact_details, logo, isLoading: false})
    console.log("pages", this.state.menu.pages[0].id)
  }


  render() {
    const { contact_details, menu, isLoading } = this.state
    return(
      <div className="pz-container-wrapper">
        <footer className="pz-footer">

          {!isLoading ? (
            <>
              <div className="pz-footer__col-1">
                <ContactDetails {...contact_details} />
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
                {menu.pages.map(entry => (
                  <span className="pz-footer__legal-item">
                    <Link to={entry.slug}>{entry.title}</Link>
                  </span>
                ))}
                </div>
              </div>
            </>
          ):(
            <h3>loading...</h3>
          )}

        </footer>
      </div>
    )
  }
}


