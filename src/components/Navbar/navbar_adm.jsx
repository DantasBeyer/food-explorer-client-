import React from 'react'
import './Navbar.css'
import Logo_adm from '../Logo/Logo_adm'
import exitImg from '../../img/icons/logout.png'
import hamburgerImg from '../../img/icons/hamburger.png'
import ButtonAdm from '../Button/ButtonAdm'


function navbarAdm() {
  return (
    <div id='navbar_container_adm'>
      <img className='hamburgerImgAdm' src={hamburgerImg} alt="hamburger_img" />
        <Logo_adm/>
      <input className='search_bar_adm' type="text" placeholder='"img" search dishes or ingredients'/>
        <ButtonAdm/>
      <img className='exitImgAdm' src={exitImg} alt="logout_img" />
    </div>
  )
}

export default navbarAdm