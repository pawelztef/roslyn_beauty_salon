import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainMenu(props) {
  return(
    <ul className="pz-menu">
      {props.pages && props.pages[0] &&
        <>
          {
            props.pages.map(page => (
                <li key={page.id}> 
                  <NavLink 
                    exact
                    className="pz-menu__item" 
                    activeClassName="pz-menu__item-active" 
                    to={page.slug}
                    onClick={props.click}
                  >
                  {page.title} 
                  </NavLink>
                </li>
              )
            )
          } 
        </>
      }
    </ul>
  )
}
