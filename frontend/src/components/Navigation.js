import React from 'react'
import Axios from 'axios'
import NavigationBar from './components/NavigationBar'
import MobileNav from './components/MobileNav'

class Navigation extends React.Component {

  state = {
    footer: {
      mobileMenuOpen: false,
      menuPages: {},
      contactDetails: {},
      logo: {},
      socialMedia: {},
      isLoading: true
    },
    navbar: {
      menu: {},
      logo: {},
      callToAction: {},
      contactDetails: {},
      socialMedia: {},
      isLoading: true
    }
  }

  async componentDidMount() {
    const footerRes = await Axios.get(process.env.REACT_APP_DOMAIN+'/footer')
    const menuPages = footerRes.data[0].menu.pages
    const contactDetails = footerRes.data[0].contact_details
    const footerLogo = footerRes.data[0].logo
    const socialMedia = footerRes.data[0].social_media.map((entry) => {
      return({
        id: entry.id,
        url: entry.url,
        type: entry.type
      })
    })

    const navbarRes = await Axios.get(process.env.REACT_APP_DOMAIN + '/navbar')
    const data = navbarRes.data[0]
    const { logo, call_to_action, contact_details, menu, social_media } = data

    this.setState({
      footer: {
        menuPages,
        contactDetails,
        logo: footerLogo,
        socialMedia,
        isLoading: false
      },
      navbar: {
        menu,
        logo: logo,
        callToAction: call_to_action,
        contactDetails: contact_details,
        socialMedia: social_media,
        isLoading: false
      }
    })
  }

  mobileMenuToggleHandler = () => {
    this.setState((prevState) => {
      console.log('App.mobileMenuToggleHandler prevState', prevState)
      return { mobileMenuOpen: !prevState.mobileMenuOpen }
    })
  }

  render() {
    const { navbar } = this.state
    const { footer } = this.state
    return (
      <>
        {!navbar.isLoading &&
          <>
              <NavigationBar 
                mobileMenuToggleHandler={this.mobileMenuToggleHandler} 
              />
              <MobileNav 
                show={this.state.mobileMenuOpen}
                click={this.mobileMenuToggleHandler} 
                navbar={navbar}
              />
          </>
        }
      </>
    )
  }

}

export default Navigation
