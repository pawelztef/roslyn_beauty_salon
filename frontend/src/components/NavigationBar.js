import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import Axios from 'axios'


class NavigationBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: {},
      brand: {},
      callToAction: {},
      contactDetails: {},
      socialMedia: {},
      isLoading: true
    }
  }

  async componentDidMount() {
    const response = await Axios.get(process.env.REACT_APP_DOMAIN + '/navbar')
    const data = response.data[0]
    const { brand, call_to_action, contact_details, menu, social_media } = data
    this.setState({
      menu,
      brand,
      callToAction: call_to_action,
      contactDetails: contact_details,
      socialMedia: social_media,
      isLoading: false
    })
  }



  render() {
    const { menu, brand, callToAction, contactDetails, isLoading } = this.state
    return(
      <header className="pz-nav">
        {!isLoading && 
          <>
            <TopNav contactDetails={this.state.contactDetails}
                    socialMedia={this.state.socialMedia}
            /> 
            <BottomNav mobileMenuToggleHandler={this.props.mobileMenuToggleHandler} /> 
          </>
        }
      </header>
    )
  }
}

export default NavigationBar
