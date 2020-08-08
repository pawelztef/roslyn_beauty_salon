import React from 'react'
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine, RiPinterestLine } from "react-icons/ri"


export default function SocialList(props) {
  console.log(props.socialMedia)
  return(
    <ul className="pz-social-list">
      {!props.isLoading ? (
        <>
          {console.log(props.socialMedia[1])}
        </>
      ) : (
        <h3>loading...</h3>
      ) }
    </ul>
  )
}
