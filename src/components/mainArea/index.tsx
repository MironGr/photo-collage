import React from "react"

import './mainArea.scss'

import { ImgZone } from 'src/components/imgZone'

export const MainArea: React.FC = () => {
  return <div className="svg-wrapper">
    <svg className="svg-area">
    </svg>
    <ImgZone 
        left={100}
        top={100}
        r={100}
        stroke='red'
        strokeWidth={20}
      />
    
  </div>
}