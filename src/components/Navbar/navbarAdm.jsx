import React from 'react'
import './navbar.css'
import logo from '../../img/icons/poligon_logo.png'
import exitImg from '../../img/icons/logout.png'
import ButtonAdm from '../Button/buttonAdm'


function navbarAdm() {
  return (
    <div id='navbar_container_adm'>
    <section className='logo_adm'>
      <img  className='img_adm' src={logo} alt="logo_img" />
      <p>food explorer</p>
    </section>
    <input className='search_bar_adm' type="text" placeholder='"img" search dishes or ingredients'/>
      <ButtonAdm/>
    <img className='img_adm' src={exitImg} alt="logout_img" />
  </div>
  )
}

export default navbarAdm