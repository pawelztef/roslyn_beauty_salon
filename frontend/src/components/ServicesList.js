import React from 'react'
import { TiHeart } from "react-icons/ti";

const servicesList = props => {
  return(
    <div className="pz-services">
      <div className="pz-services__list">
        <h4 className="pz-services-header">Eyebrows 
          <span><TiHeart /></span>
        </h4>
        <ul className="pz-services-prices">
          <li><a href="http://pawelztef.me">Brow consultation</a><br/><span>free</span></li>
          <li><a href="http://pawelztef.me">Correction</a><br/><span>$35</span></li>
          <li><a href="http://pawelztef.me">Staining</a><br/><span>$25</span></li>
          <li><a href="http://pawelztef.me">Laminating eyebrows</a><br/><span>$15</span></li>
          <li><a href="http://pawelztef.me">Partial eyebrow lamination</a><br/><span>$50</span></li>
          <li><a href="http://pawelztef.me">Male correction</a><br/><span>$25</span></li>
        </ul>
      </div>
      <div className="pz-services__list">
        <h4 className="pz-services-header">Eyelashes
          <span><TiHeart /></span>
        </h4>
        <ul className="pz-services-prices">
          <li><a href="http://pawelztef.me">Brow consultation</a><br/><span>free</span></li>
          <li><a href="http://pawelztef.me">Eyelash staining</a><br/><span>free</span></li>
          <li><a href="http://pawelztef.me">Lamination + dyeing <br/>of eyelashes</a><br/><span>$35</span></li>
          <li><a href="http://pawelztef.me">Biochemical + eyelash <br/>coloring</a><br/><span>$25</span></li>
        </ul>
      </div>
      <div className="pz-services__list">
        <h4 className="pz-services-header">Makeup
          <span><TiHeart /></span>
        </h4>
        <ul className="pz-services-prices">
          <li><a href="http://pawelztef.me">Brow consultation</a><br/><span>free</span></li>
          <li><a href="http://pawelztef.me">Correction</a><br/><span>$35</span></li>
          <li><a href="http://pawelztef.me">Staining</a><br/><span>$25</span></li>
          <li><a href="http://pawelztef.me">Laminating eyebrows</a><br/><span>$15</span></li>
          <li><a href="http://pawelztef.me">Partial eyebrow lamination</a><br/><span>$50</span></li>
          <li><a href="http://pawelztef.me">Male correction</a><br/><span>$25</span></li>
        </ul>
      </div>
      <div className="pz-services__list">
        <h4 className="pz-services-header">Hair style
          <span><TiHeart /></span>
        </h4>
        <ul className="pz-services-prices">
          <li><a href="http://pawelztef.me">Eyelash staining</a><br/><span>free</span></li>
          <li><a href="http://pawelztef.me">Lamination + dyeing <br/>of eyelashes</a><br/><span>$35</span></li>
          <li><a href="http://pawelztef.me">Biochemical + eyelash <br/>coloring</a><br/><span>$25</span></li>
        </ul>
      </div>
    </div>
  )
}

export default servicesList
