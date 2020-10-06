import React from 'react'
import Axios from 'axios'
import ContactDetails from './ContactDetails'
import Brand from './Brand'
import SocialList from './SocialList'
import {Link} from 'react-router-dom'
import EmptySpace from './EmptySpace'


export default class Footer extends React.Component {


  state = {
    menuPages: [],
    contactDetails: {},
    logo: {},
    socialMedia: {},
    isLoading: true
  }

  async componentDidMount() {
    const footerRes = await Axios.get(process.env.REACT_APP_DOMAIN+'/footer')

    const data = footerRes.data[0]
    const { menu, contact_details, logo, social_media } = data

    this.setState({ 
      menuPages: menu.pages,
      contactDetails: contact_details,
      logo,
      socialMedia: social_media,
      isLoading: false
    })

  }

  render() {

    return(
      <>
        <div className="pz-deco-stripe"></div>
        <div className="pz-container-wrapper pz-footer-wrapper">
          <EmptySpace />
          <footer className="pz-footer">
            {!this.state.isLoading ? (
              <>
                <div className="pz-footer__col-1">
                  {this.state.contactDetails &&
                  <ContactDetails {...this.state.contactDetails} />
                  }
                </div>
                <div className="pz-footer__col-2">
                  {this.state.logo &&
                  <Brand {...this.state.logo}/>
                  }
                  <div className="pz-footer-meta">
                    <span>
                      <a href="https://pawelztef.me">Pawelztef</a>© 2020
                    </span>
                    <span>
                      All rights reserved
                    </span>
                  </div>
                  {this.state.socialMedia &&
                  <SocialList socialMedia={this.state.socialMedia} />
                  }
                </div>
                <div className="pz-footer__col-3">
                  <div className="pz-footer__legal">
                    <h6>Site links</h6>
                    {this.state.menuPages &&
                        this.state.menuPages.map(entry => (
                          <span key={entry.id} className="pz-footer__legal-item">
                            <Link to={entry.slug}>{entry.title}</Link>
                          </span>
                        ))
                    }
                  </div>
                </div>
              </>
            ):(
              <></>
            )}

          </footer>
          <EmptySpace />
        </div>
      </>
    )
  }
}


