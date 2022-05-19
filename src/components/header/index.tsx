import React from "react"

import './header.scss'

export const Header: React.FC = () => {
  return <div className="header">
    <p className="header__title">Photo Collage</p>
    <p className="header__subtitle">create your favorit collage</p>
  </div>
}