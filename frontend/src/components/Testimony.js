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

    return(
      <div className="pz-testimony__wrapper">
        <EmptySpace />
        <div class="pz-container-wrapper">
          <div className="pz-testimony__container">
            <h2 className="pz-section__header">Happy clients about us</h2>

            <div className="pz-testimony__content">
              <Slider {...settings}>
                <div className="pz-testimony__slider-item">
                  <p>“Muji Salon provides such great services to maintain my nails. I love the products
                    they used on my nails, nothing but the best. I love coming here and I will never
                    go anywhere else to get my nails done!”</p>
                  <span><TiHeart /></span>
                  <h4>Amanda Wellsh</h4>
                </div>
                <div className="pz-testimony__slider-item">
                  <p>“This is not just another beauty salon! These ladies are super talented! My nails
                    have never looked/felt more amazing!! The environment here is so happy and cheery! 
                    Keep up the great work!”</p>
                  <span><TiHeart /></span>
                  <h4>Nelly Simpson</h4>
                </div>
                <div className="pz-testimony__slider-item">
                  <p>“Muji Salon provides such great services to maintain my nails. I love the products
                    they used on my nails, nothing but the best. I love coming here and I will never
                    go anywhere else to get my nails done!”</p>
                  <span><TiHeart /></span>
                  <h4>Kim Parker</h4>
                </div>
                <div className="pz-testimony__slider-item">
                  <p>“Muji team is the best when it comes about a makeup. They genuinely care about your
                    comfort and work hard to take care of any problem areas.”</p>
                  <span><TiHeart /></span>
                  <h4>Sara Devise</h4>
                </div>
                <div className="pz-testimony__slider-item">
                  <p>“Muji Salon provides such great services to maintain my nails. I love the products
                    they used on my nails, nothing but the best. I love coming here and I will never
                    go anywhere else to get my nails done!”</p>
                  <span><TiHeart /></span>
                  <h4>Kim Parker</h4>
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

export default Testimony
