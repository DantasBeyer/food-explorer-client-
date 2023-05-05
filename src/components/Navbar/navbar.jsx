import React from 'react'
import './navbar.css'
import Myorders from '../MyOrders/myorders'
import exitImg from '../../img/icons/logout.png'
import Logo from '../Logo/logo'
import hamburgerImg from '../../img/icons/hamburger.png'

function navbar() {
  return (
    <div id='navbar_container'>
    <img className='hamburgerImg' src={hamburgerImg} alt="hamburger_img" />
      <Logo/>
      <input className='search_bar' type="text" placeholder='"img" search dishes or ingredients'/>
      <div className='myorders'>
        <Myorders/>
      </div>
      <img className='exitImg' src={exitImg} alt="logout_img" />

    </div>
  )
}

export default navbar