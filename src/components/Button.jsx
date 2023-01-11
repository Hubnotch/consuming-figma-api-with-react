import React from 'react'
import { figmaJSON } from '../api/Api'

const Button = () => {
    const width = figmaJSON.document?.children[0]?.children[0]?.absoluteRenderBounds?.width ?? '500px'
    const height = figmaJSON?.document?.children[0]?.children[0]?.absoluteRenderBounds?.height ?? '500px'
console.log(width);
    const buttonStyle = {
        height:height,
        width:width
}


  return (
      <button style={buttonStyle}>
          some content
    </button>
  )
}

export default Button