import React from 'react'
import './navbar.css'
import Myorders from '../MyOrders/myorders'
import exitImg from '../../img/icons/logout.png'
import Logo from '../Logo/logo'

function navbar() {
  return (
    <div id='navbar_container'>
      <Logo/>
      <input className='search_bar' type="text" placeholder='"img" search dishes or ingredients'/>
        <Myorders/>
      <img className='img' src={exitImg} alt="logout_img" />
    </div>
  )
}

export default navbar