import React, {Component} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import EmptySpace from './EmptySpace'



class SimpleMap extends Component {
  render() {
    const elem = document.getElementsByClassName("contact-info__map")
    const height =  (elem.length > 0) ? elem[0].offsetHeight : 420
    return (
      <>
        {height && 
        <div className="pz-map__wrapper">
          <Map
            google={this.props.google}
            zoom={this.props.zoom}
            containerStyle={{ position: 'relative', width: '100%', height: `${height}px` }}
            initialCenter={{
              lat: this.props.latitude,
              lng: this.props.longitude
            }}
            mapTypeControl={false}
            fullscreenControl={false}
          />
        </div>
        }
      </>
    )
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.api_key
  })
)(SimpleMap)

