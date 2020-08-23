import React, {Component} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'



class SimpleMap extends Component {
  render() {
    return (
      <div className="pz-map__wrapper">
        <Map
          google={this.props.google}
          zoom={this.props.zoom}
          containerStyle={{ position: 'relative', width: '100%', height: '420px' }}
          initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.api_key
  })
)(SimpleMap)

