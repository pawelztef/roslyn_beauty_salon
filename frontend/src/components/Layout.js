import React from 'react'

export default function Layout(props) {
  return (
    <div className="bd-wr">
      <div className="pg-wr">
        <div className="pg-ct-wr">
          <div class="ct-wr">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
