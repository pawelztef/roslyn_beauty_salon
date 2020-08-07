import React, {Component} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'


const mapStyles = {
  width: '100%',
  height: '500px',
}

class SimpleMap extends Component {
  render() {
    return (
      <div className="pz-map__wrapper">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          containerStyle={{ position: 'relative', width: '100%', height: '500px' }}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(SimpleMap)

