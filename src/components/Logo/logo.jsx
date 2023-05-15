import React from 'react'
import logo_img from '../../img/icons/poligon_logo.png'
import './Logo.css'


function Logo() {
  return (
    <div className='logo_container'>
    <img src={logo_img} alt="logo_img" />
    <a href="/">food explorer</a>
   
    </div>
  )
}

export default Logo
