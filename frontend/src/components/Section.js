import React from 'react'
import EmptySpace from './EmptySpace'

const section = (props) => {
  const bg = props.background
  const bgImage = `url(${props.backgroundImage})`
  return(
    <div className="pz-section__wrapper" style={{background: bg, backgroundImage: bgImage}}>
      <EmptySpace  
        small={props.small}
        className="pz-empty-space"/>
      {props.title &&
      <>
        <h2 className="pz-section__title">{props.title}</h2>
        <EmptySpace  
          small
          className="pz-empty-space"/>
      </>
      }
      {props.subtitle &&
      <p className="pz-section__subtitle">{props.subtitle}</p>
      }
      <div className="pz-section__row">
        <div className="pz-container">
          { props.children }
        </div>
      </div>
      <EmptySpace  
        small={props.small}
        className="pz-empty-space"/>
    </div>
  )
}

export default section
