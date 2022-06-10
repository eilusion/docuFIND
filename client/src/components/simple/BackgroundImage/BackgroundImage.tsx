import React from 'react'

type TBackgroundImageProps = {
  image: string,
}

export const BackgroundImage = (props: TBackgroundImageProps) => {
  return (
      <img src={props.image} alt="" />
    )
}
