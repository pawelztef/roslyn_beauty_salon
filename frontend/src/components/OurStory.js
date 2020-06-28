import React from 'react'
import EmptySpace from './EmptySpace'
import Slider from "react-slick"




class OurStory extends React.Component {

  render() {
    console.log(window.innerWidth)
    const settings = {
      className: 'pz-our-story__slider',
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
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

    return(
      <div className="pz-our-story__wrapper">
        <EmptySpace />
        <div class="pz-container-wrapper">
          <div className="pz-our-story__container">
            <h2 className="pz-section__header">Our Story</h2>

            <div className="pz-our-story__content">
              <Slider {...settings}>
                <div className="pz-our-story__slider-item">
                  <h4>2015</h4>
                  <p>
                    Elit vitae minima doloribus officiis excepturi temporibus? Consequatur id modi tenetur
                    nesciunt accusantium. Exmolestias dolor esse saepe amet! Consectetur molestiae veritatis
                    voluptates aut fuga. Quaerat nam iste reiciendis maxime.
                  </p>
                </div>
                <div className="pz-our-story__slider-item">
                  <h4>2016</h4>
                  <p>
                    Elit vitae minima doloribus officiis excepturi temporibus? Consequatur id modi tenetur
                    nesciunt accusantium. Ex molestias dolor esse saepe amet! Consectetur molestiae veritatis
                    voluptates aut fuga. Quaerat nam iste reiciendis maxime.
                  </p>
                </div>
                <div className="pz-our-story__slider-item">
                  <h4>2017</h4>
                  <p>
                    Elit vitae minima doloribus officiis excepturi temporibus? Consequatur id modi tenetur
                  </p>
                </div>
                <div className="pz-our-story__slider-item">
                  <h4>2018</h4>
                  <p>
                    Elit vitae minima doloribus officiis excepturi temporibus? Consequatur id modi tenetur
                    nesciunt accusantium. Ex molestias dolor esse saepe amet! Consectetur molestiae veritatis
                    voluptates aut fuga. Quaerat nam iste reiciendis maxime.
                  </p>
                </div>
                <div className="pz-our-story__slider-item">
                  <h4>2019</h4>
                  <p>
                    Elit vitae minima doloribus officiis excepturi temporibus? Consequatur id modi tenetur
                    voluptates aut fuga. Quaerat nam iste reiciendis maxime.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <EmptySpace />
      </div>
    )
  }


}

export default OurStory
