import React from 'react'

const Slider = (props) =>  {
  const {data} = props
  console.log('Slider.render data', data)
  const url = data.item[0].image.url
  console.log(url)
  return (
   <div className="pz-animated-banner">
    <img src={"http://localhost:1337" + url} alt=""/>
   </div>
  )
}


export default Slider
