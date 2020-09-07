import React from 'react'
import Axios from 'axios'
import NavigationBar from './NavigationBar'
import MobileNav from './MobileNav'

class Navigation extends React.Component {

  state = {
    navbar: {
      menu: {},
      logo: {},
      callToAction: {},
      contactDetails: {},
      socialMedia: {},
      isLoading: true
    },
  }

  async componentDidMount() {
    try {
      const navbarRes = await Axios.get(process.env.REACT_APP_DOMAIN + '/navbar')
      const data = navbarRes.data[0]
      const { logo, call_to_action, contact_details, menu, social_media } = data
      this.setState({
        navbar: {
          menu,
          logo: logo,
          callToAction: call_to_action,
          contactDetails: contact_details,
          socialMedia: social_media,
          isLoading: false
        },
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  mobileMenuToggleHandler = () => {
    this.setState((prevState) => {
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
