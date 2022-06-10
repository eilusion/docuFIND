import React from 'react'
import "./BackgroundImage.css"

type TBackgroundImageProps = {
  image: string,
}

export const BackgroundImage = (props: TBackgroundImageProps) => {
  return (
      <img className='BackgroundImage' src={props.image} alt="" />
    )
}
