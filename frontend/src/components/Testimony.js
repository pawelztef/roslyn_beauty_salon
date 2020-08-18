import React from 'react'
import EmptySpace from './EmptySpace'
import Slider from "react-slick"
import { TiHeart } from "react-icons/ti";




class Testimony extends React.Component {


  render() {
    const settings = {
      className: 'pz-testimony__slider',
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    const {id, title, quote } = this.props
    return(
      <div className="pz-testimony__wrapper">
        <EmptySpace />
        <div className="pz-container-wrapper">
          <div className="pz-testimony__container">
            <h2 className="pz-section__header">{ title }</h2>
            <div className="pz-testimony__content">
              <Slider {...settings}>
                {
                  quote.map((item) => {
                    return (
                      <div key={id} className="pz-testimony__slider-item">
                        <p>“{item.body}“</p>
                        <span><TiHeart /></span>
                        <h4>{item.author}</h4>
                      </div>

                    )
                  })
                }
              </Slider>
            </div>
          </div>
        </div>
        <EmptySpace />
      </div>
    )
  }


}

export default Testimony
