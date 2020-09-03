import React, {Component} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import EmptySpace from './EmptySpace'



class SimpleMap extends Component {
  render() {
    return (
      <>
        <div className="pz-container-wrapper">
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
        </div>
        <EmptySpace />
      </>
    )
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.api_key
  })
)(SimpleMap)

