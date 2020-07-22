import React from 'react'

const Header = ({backgroundImage, title}) =>  {
  return (
   <div className="pz-header">
     <img className="pz-header__background" src={backgroundImage}/>
     <h1 className="pz-header__title">{title}</h1>
   </div>
  )
}


export default Header
