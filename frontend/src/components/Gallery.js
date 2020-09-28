import React from 'react'
import RespGallery from './RespGallery'
import SimpleReactLightbox from "simple-react-lightbox";


class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  mapImages() {
    let images = this.props.images.map( (obj) => {
      return (
        {
          id: obj.id,
          caption: obj.image.caption,
          large: obj.image.formats.large.url,
          thumbnail: obj.image.formats.medium.url
        }
      )
    })
    return images
  }

  render() {
    let images = this.mapImages()
    return (
      <div>
        <SimpleReactLightbox>
          <RespGallery images={images} />
        </SimpleReactLightbox>
      </div>
    )
  }

}

  export default Gallery
