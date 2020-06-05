import React from 'react'
import styled from 'styled-components'
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine, RiPinterestLine } from "react-icons/ri"

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  border-left: 1px black solid;
  margin-left: 20px;
  padding-left: 5px;
`
const ListItem = styled.li`
  margin-left: 10px;
  padding: 0px 10px;
  border-radius: 56%;
`

export default function SocialList() {
  return(

  <List className="pz-social-list">
    <ListItem className="pz-social-list__item"> <RiFacebookCircleLine /> </ListItem>
    <ListItem className="pz-social-list__item"> <RiTwitterLine /> </ListItem>
    <ListItem className="pz-social-list__item"> <RiInstagramLine /> </ListItem>
    <ListItem className="pz-social-list__item"> <RiPinterestLine /> </ListItem>
  </List>


  )
}
