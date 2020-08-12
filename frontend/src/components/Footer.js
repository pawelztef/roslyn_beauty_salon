import React from 'react'
import Axios from 'axios'
import ContactDetails from './ContactDetails'
import Brand from './Brand'
import SocialList from './SocialList'
import {Link} from 'react-router-dom'


export default class Footer extends React.Component {



  render() {
    const { menuPages, contactDetails, logo, socialMedia, isLoading } = this.props.footer

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
                <SocialList socialMedia={socialMedia} />
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


