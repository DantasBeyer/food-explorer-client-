import React from 'react'
import LogoAdmMobile from '../../Logo/logo_adm_mobile'
import hamburger from '../../../img/icons/hamburger.png'

function navbar_mobile_adm() {
  return (
    <div className='navbar_mobile_adm_container'>
    <img  className='hamburger' src= {hamburger} alt="" />
    <LogoAdmMobile/>
    </div>
  )
}

export default navbar_mobile_adm