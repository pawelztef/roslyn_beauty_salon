import React from 'react'
import Axios from 'axios'
import ContactDetails from './ContactDetails'
import Brand from './Brand'
import SocialList from './SocialList'
import {Link} from 'react-router-dom'


export default class Footer extends React.Component {
  _isMounted = false

  state = {
    menuPages: {},
    contactDetails: {},
    logo: {},
    socialMedia: {},
    isLoading: true
  }

  async componentDidMount() {
    this._isMounted = true
    const response = await Axios.get('http://localhost:1337/footer')

    if(this._isMounted) {
      const menuPages = response.data[0].menu.pages
      const contactDetails = response.data[0].contact_details
      const logo = {
        alt: response.data[0].logo.alt,
        linkUrl: response.data[0].logo.url,
        logoImageUrl: response.data[0].logo.image.url
      }
      const socialMedia = response.data[0].social_media.map((entry) => {
        return({
          id: entry.id,
          url: entry.url,
          image_url: entry.image.url
        })
      })
      this.setState({menuPages, contactDetails, logo, socialMedia, isLoading: false})
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }


  render() {
    const { menuPages, contactDetails, logo, socialMedia, isLoading } = this.state
    let socialList;
    if(!isLoading) {
      socialList = <SocialList socialMedia={socialMedia} isLoading={this.state.isLoading} />
    console.log('hi', socialMedia[0].id)
    } else {
      socialList = null
      console.log('no')
    }
    return(
      <div className="pz-container-wrapper">
        <footer className="pz-footer">


          {!isLoading ? (
            <>
              <div className="pz-footer__col-1">
                <ContactDetails {...contactDetails} />
              </div>
              <div className="pz-footer__col-2">
                <Brand {...logo}/>
                <div className="pz-footer-meta">
                  <span>
                    <a href="https://pawelztef.me">Pawelztef</a>© 2020
                  </span>
                  <span>
                    All rights reserved
                  </span>
                </div>
                {socialList}
              </div>
              <div className="pz-footer__col-3">
                <div className="pz-footer__legal">
                  {menuPages.map(entry => (
                    <span key={entry.id} className="pz-footer__legal-item">
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


