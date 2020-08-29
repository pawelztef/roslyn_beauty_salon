import React from 'react'


const hero = (props) =>  {
  return (
    <div>
      <div className="pz-header">
        <img className="pz-header__background" src={process.env.REACT_APP_DOMAIN+props.background.url}/>
        <h1 className="pz-header__title">{props.title}</h1>
      </div>
    </div>
  )
}


export default hero
