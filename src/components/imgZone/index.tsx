import React from "react"

import './imgZone.scss'

type Props = {
  left: number,
  top: number,
  r: number,
  stroke: string,
  strokeWidth: number,
}

export const ImgZone: React.FC<Props> = ({
  left,
  top,
  r,
  stroke,
  strokeWidth
}) => {
  const wh = {
    width: r * 2,
    height: r * 2,
  }

  return <div 
    className="image-zone"
    style={{
      ...wh,
      outline: `${strokeWidth}px ${stroke} solid`,
      left: left,
      top: top,
    }}
  >
    <div 
      className="image-zone__wrapper"
      style={wh}
    >
      <div 
        className="image-zone__plaseholder"
        style={wh}
      >
        <svg viewBox="0 0 92 92" width='42' height='42'>
          <path
            className="image-zone__icon"
            d="M72.5,46.5c0,2.5-2,4.5-4.5,4.5H50v17c0,2.5-2,4.5-4.5,4.5S41,70.5,41,68V51H24c-2.5,0-4.5-2-4.5-4.5
              s2-4.5,4.5-4.5h17V24c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5v18h18C70.5,42,72.5,44,72.5,46.5z"
          />
        </svg>
      </div>
      <input 
        type='file'
        className="image-zone__input"
        style={wh}
      />
    </div>
  </div>
}