import React from 'react'
import Brand from './Brand'
import MainMenu from './MainMenu'
import SocialList from './SocialList'
import { RiCloseLine } from "react-icons/ri";


export default function MobileNav(props) {

  let mobileNavClasses = 'pz-nav__mobile-nav'
  if(props.show) {
    mobileNavClasses = 'pz-nav__mobile-nav open'
  }

  return(
    <div className={mobileNavClasses}>
      <span className="pz-nav__mobile-nav-close" onClick={props.click}><RiCloseLine /></span>
      {props.navbar.logo && props.navbar.logo.image &&
      <Brand mobile {...props.navbar.logo}/>
      }
      {props.navbar.menu &&
      <MainMenu click={props.click} {...props.navbar.menu}/>
      }
      {props.navbar.socialMedia && props.navbar.socialMedia[0] &&
        <SocialList socialMedia={props.navbar.socialMedia} />
      }
    </div>
  )
}
