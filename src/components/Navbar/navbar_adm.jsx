import React from 'react'
import './navbar.css'
import Logo_adm from '../Logo/logo_adm'
import exitImg from '../../img/icons/logout.png'
import ButtonAdm from '../Button/buttonAdm'


function navbarAdm() {
  return (
    <div id='navbar_container_adm'>
      <Logo_adm/>
    <input className='search_bar_adm' type="text" placeholder='"img" search dishes or ingredients'/>
      <ButtonAdm/>
    <img className='img_adm' src={exitImg} alt="logout_img" />
  </div>
  )
}

export default navbarAdm