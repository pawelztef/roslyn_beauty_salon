import React from 'react'

const Header = (props) =>  {
  return (
   <div className="pz-header">
     <img className="pz-header__background" src={props.backgroundImage}/>
     <h1 className="pz-header__title">{props.title}</h1>
   </div>
  )
}


export default Header
