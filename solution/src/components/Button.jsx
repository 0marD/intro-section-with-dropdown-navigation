import React from 'react'

function Button(props) {
  return (
    <button disabled="disabled" className={props.className}>{props.action}</button>
  )
}

export default Button