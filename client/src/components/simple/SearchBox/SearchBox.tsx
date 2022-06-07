import React from 'react'
import "./SearchBox.css"

type TSearchBoxProps = {

}

export const SearchBox = (props: TSearchBoxProps) => {
  return (
    <div className="SearchBox">
        <input className="SearchBox__input" type="text" placeholder="ENTER KEYWORD..." />
    </div>
  )
}