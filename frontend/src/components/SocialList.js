import React from 'react'
import styled from 'styled-components'
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine, RiPinterestLine } from "react-icons/ri"

const List = styled.ul`
`
const ListItem = styled.li`
`

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
