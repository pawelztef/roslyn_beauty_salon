import React from 'react'

export default function Layout(props) {
  return (
    <div className="body-wrapper">

      <div className="responsivnes-indicator"></div>

      <div className="page-wrapper">
        <div className="page-container-wrapper">
            {props.children}
        </div>
      </div>
    </div>
  )
}
