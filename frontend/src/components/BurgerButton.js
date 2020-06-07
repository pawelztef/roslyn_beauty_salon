import React from 'react'
import styled from 'styled-components'
import { RiMenuLine } from "react-icons/ri"

const BurrgerWrp = styled.span`
  display: none;
  position: relative;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  top: 4px;
  text-align: center;
  line-height: 40px;
  svg {
    font-size: 18px;
  }
`

export default function BurgerButton(props) {
  return(
    <BurrgerWrp className='pz-nav__burger-button pz-visible-md' onClick={props.click}>
      <RiMenuLine />
    </BurrgerWrp>
  )
}
