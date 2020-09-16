import React, { Component} from 'react';
import Masonry from 'react-masonry-component';
import EmptySpace from './EmptySpace'
import { SRLWrapper } from "simple-react-lightbox";
import { RiEyeLine } from "react-icons/ri"



const masonryOptions = {
  transitionDuration: 0,
  gutter: 20,
  fitWidth: true,
  itemSelector: '.grid-item'
};

export default class RespGallery extends Component {

  constructor(props) {
    super(props);
  }

  renderGallery() {
    let {images}  = this.props;
    if (!images) return;

    const gallery = images.map(({id, caption, thumbnail, large}) => {
      return (
        <div key={id} className={`grid-item`}>
          <a className="grid-item__lightbox-btn" 
            href={process.env.REACT_APP_DOMAIN+large} 
            data-attribute="SRL"
          >
            <div className="grid-item__overlay"></div>
            <div className="grid-item__icon">
              <RiEyeLine />
            </div>
            <img 
              src={process.env.REACT_APP_DOMAIN+thumbnail} 
              className={`gallery-img`}
              alt={caption}
            />
          </a>
        </div>
      );
    });

    return (
      <Masonry
        className={'grid'} // default ''
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={true}>
        {gallery}
      </Masonry>

    );
  }

  render() {
    let masonryGrid = document.getElementsByClassName('.grid')
    console.log('masonryGrid ', masonryGrid[0])
    return (
      <>
        <div className="pz-container-gallery">
          <div className={`content `}>
            <SRLWrapper>
              {this.renderGallery()}
            </SRLWrapper>
          </div>
        </div>
        <EmptySpace />
      </>
    );
  }

}

