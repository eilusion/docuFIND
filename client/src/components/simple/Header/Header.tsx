import React from 'react';
import "./Header.css";

type THeaderProps = {
    text: string,
    tagline: string
}

export const Header = (props: THeaderProps) => {
  return (
    <div className="Header">
      <div className="Header__text">
        {props.text}
      </div>
      <div className="Header__tagline">
        {props.tagline}
      </div>
    </div>
  )
}