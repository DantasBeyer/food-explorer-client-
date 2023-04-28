import React from 'react'
import hamburger from '../../../img/icons/hamburger.png'
import './navbar_mobile.css'
/* import Logo from '../../Logo/logo' */
import LogoFooter from '../../Logo/logo_footer'
import Myorders_mobile from '../../MyOrders/myorders_mobile'

 
function navbar_mobile() {
  return (
    <div className='navbar_mobile_conteiner'>
      <img className='hamburger' src={hamburger} alt="" />

    <div className='logo_mobile'>
    {  /* <Logo/> */}
    <LogoFooter/>

    </div>

    <Myorders_mobile/>


    
    </div>
  )
}

export default navbar_mobile