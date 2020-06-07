import React from 'react'
import Brand from './Brand'
import { RiCloseLine } from "react-icons/ri";


export default function MobileNav(props) {

  let mobileNavClasses = 'pz-nav__mobile-nav'

  console.log('mobileNav props.show', props.show)

  if(props.show) {
    mobileNavClasses = 'pz-nav__mobile-nav open'
  }

  return(
   <div className={mobileNavClasses}>
     <span className="pz-nav__mobile-nav-close" onClick={props.click}><RiCloseLine /></span>
     <Brand />
   </div>
  )
}
