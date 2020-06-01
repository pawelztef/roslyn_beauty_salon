import React from 'react'
import EmptySpace from './EmptySpace'

export default function Layout(props) {
  return (
    <div className="pz-body-wrapper">
      <div className="responsivnes-indicator"></div>
      <div className="pz-page-wrapper">
        <div className="pz-page-container-wrapper">
            {props.children}
        </div>
      </div>
        <EmptySpace />
    </div>
  )
}
