import React from 'react'
import logo from '../../img/icons/poligon_logo.png'
import './navbar.css'
import Myorders from '../MyOrders/myorders'
import exitImg from '../../img/icons/logout.png'

function navbar() {
  return (
    <div id='navbar_container'>
      <section className='logo'>
        <img src={logo} alt="logo_img" />
        <p>food explorer</p>
      </section>
      
      <input className='search_bar' type="text" placeholder='"img" search dishes or ingredients'/>

      <div className='myorders'>
        <Myorders/>
      </div>
      
      <img src={exitImg} alt="logout_img" />
        
    </div>
  )
}

export default navbar