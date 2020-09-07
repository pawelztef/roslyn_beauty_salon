import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import Axios from 'axios'


class NavigationBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: {},
      logo: {},
      callToAction: {},
      contactDetails: {},
      socialMedia: {},
      isLoading: true
    }
  }

  async componentDidMount() {
    try {
      const response = await Axios.get(process.env.REACT_APP_DOMAIN + '/navbar')
      const data = response.data[0]
      const { logo, call_to_action, contact_details, menu, social_media } = data
      this.setState({
        menu,
        logo,
        callToAction: call_to_action,
        contactDetails: contact_details,
        socialMedia: social_media,
        isLoading: false
      })
    } catch (err) {
      console.log(err.message)
    }
  }



  render() {
    const { menu, logo, callToAction, contactDetails, isLoading } = this.state
    return(
      <header className="pz-nav">
        {!isLoading && 
        <>
          <TopNav contactDetails={this.state.contactDetails}
            socialMedia={this.state.socialMedia}
          /> 
        <BottomNav mobileMenuToggleHandler={this.props.mobileMenuToggleHandler}
          logo={this.state.logo}
          menu={this.state.menu}
          callToAction={this.state.callToAction}
        /> 
    </>
        }
      </header>
    )
  }
}

export default NavigationBar
