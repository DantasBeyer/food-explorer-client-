import React from 'react'
import hamburger from '../../../img/icons/hamburger.png'
import recept from '../../../img/icons/recept.png'
import './navbar_mobile.css'
import Logo from '../../Logo/logo'

 
function navbar_mobile() {
  return (
    <div className='navbar_mobile_conteiner'>
      <img src={hamburger} alt="" />

    <div className='logo_mobile'>
      <Logo/>
    </div>

    <img src={recept} alt="" />


    
    </div>
  )
}

export default navbar_mobile