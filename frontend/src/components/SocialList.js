import React from 'react'
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine, RiPinterestLine } from "react-icons/ri"


export default function SocialList() {
  return(

  <ul className="pz-social-list">
    <li className="pz-social-list__item"> <RiFacebookCircleLine /> </li>
    <li className="pz-social-list__item"> <RiTwitterLine /> </li>
    <li className="pz-social-list__item"> <RiInstagramLine /> </li>
    <li className="pz-social-list__item"> <RiPinterestLine /> </li>
  </ul>


  )
}
