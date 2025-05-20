
import React, { useState } from 'react'

const Selection = (props) => {
  const [bgStyle, setBgStyle] = useState({});
  const handleClick = () => {
    props.applyColor(setBgStyle);
  };
  return (
    <div
      className="fix-box"
      style={bgStyle}
      onClick={handleClick}
    >
    </div>
  )
}

export default Selection
