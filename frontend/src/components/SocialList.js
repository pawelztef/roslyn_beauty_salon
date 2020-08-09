import React from 'react'
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine, RiPinterestLine } from "react-icons/ri"


export default class SocialList extends React.Component {
  constructor(props) {
    super(props)
  }


  renderIcon(param) {
    switch(param) {
      case 'twitter':
        return <RiTwitterLine />
      case 'facebook':
        return <RiFacebookCircleLine />
      case 'instagram':
        return <RiInstagramLine />
      case 'pinterest':
        return <RiPinterestLine />
    }
  }

  render() {
    console.log(" social list ", this.props)
    return(
      <ul className="pz-social-list">

        {this.props.socialMedia && this.props.socialMedia[0] &&
            this.props.socialMedia.map( (item) => {
              return (
                <li key={item.id} className="pz-social-list__item"> <a href={item.url}> {this.renderIcon(item.type)} </a> </li>
              )
            })
        }
      </ul>
    )
  }
}
