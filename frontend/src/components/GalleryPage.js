import React from 'react'
import mockPage from '../utils/page'

import CardGroup from './CardGroup'
import Slider from './Slider'
import Banner from './Banner'
import Welcome from './Welcome'
import EmptySpace from './EmptySpace'
import Newsletter from './Newsletter'
import Appointment from './Appointment'
import Team from './Team'
import Services from './Services'
import Testimony from './Testimony'
import Portfolio from './Portfolio'
import bg from '../assets/images/header-grad.png'
import Header from './Header'
import Gallery from 'react-grid-gallery'

import g1 from '../assets/images/gallery/g1.jpg'
import tg1 from '../assets/images/gallery/thumb-g1-320-421.jpg'
import g2 from '../assets/images/gallery/g2.jpg'
import tg2 from '../assets/images/gallery/thumb-g2-320-196.jpg'
import g3 from '../assets/images/gallery/g3.jpg'
import tg3 from '../assets/images/gallery/thumb-g3-271-357.jpg'
import g4 from '../assets/images/gallery/g4.jpg'
import tg4 from '../assets/images/gallery/thumb-g4-320-196.jpg'
import g5 from '../assets/images/gallery/g5.jpg'
import tg5 from '../assets/images/gallery/thumb-g5-320-196.jpg'
import g6 from '../assets/images/gallery/g6.jpg'
import tg6 from '../assets/images/gallery/thumb-g6-271-357.jpg'
import g7 from '../assets/images/gallery/g7.jpg'
import tg7 from '../assets/images/gallery/thumb-g7-320-197.jpg'
import g8 from '../assets/images/gallery/g8.jpg'
import tg8 from '../assets/images/gallery/thumb-g8-320-196.jpg'
import g9 from '../assets/images/gallery/g9.jpg'
import tg9 from '../assets/images/gallery/thumb-g9-320-197.jpg'
import g10 from '../assets/images/gallery/g10.jpg'
import tg10 from '../assets/images/gallery/thumb-g10-271-355.jpg'

const IMAGES =
  [
    {
      src: g1,
      thumbnail: tg1,
      thumbnailWidth: 320,
      thumbnailHeight: 421
    },
    {
      src: g2,
      thumbnail: tg2,
      thumbnailWidth: 320,
      thumbnailHeight: 196
    },
    {
      src: g3,
      thumbnail: tg3,
      thumbnailWidth: 271,
      thumbnailHeight: 357
    },
    {
      src: g4,
      thumbnail: tg4,
      thumbnailWidth: 320,
      thumbnailHeight: 196
    },
    {
      src: g5,
      thumbnail: tg5,
      thumbnailWidth: 320,
      thumbnailHeight: 196
    },
    {
      src: g6,
      thumbnail: tg6,
      thumbnailWidth: 271,
      thumbnailHeight: 357
    },
    {
      src: g7,
      thumbnail: tg7,
      thumbnailWidth: 320,
      thumbnailHeight: 197
    },
    {
      src: g10,
      thumbnail: tg10,
      thumbnailWidth: 271,
      thumbnailHeight: 355
    },
    {
      src: g8,
      thumbnail: tg8,
      thumbnailWidth: 320,
      thumbnailHeight: 196
    },
    {
      src: g2,
      thumbnail: tg2,
      thumbnailWidth: 320,
      thumbnailHeight: 196
    }
  ]


class GalleryPage  extends React.Component {
  render() {
    return(
      <div className="pz-page-container-wrapper">
        <Header 
          title="Gallery"
          backgroundImage={bg}
        />
        <EmptySpace />
        <div className="pz-gallery__row">
          <div className="pz-container pz-gallery__container">
            <Gallery 
              margin={3}
              rowHeight={196}
              enableImageSelection={false}
              images={IMAGES}/>
          </div>
        </div>
        <EmptySpace />
        <Newsletter /> 
      </div>
    )
  }
}

export default GalleryPage 
