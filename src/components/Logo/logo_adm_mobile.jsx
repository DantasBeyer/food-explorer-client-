import React from 'react'
import './logo.css'
import logo_img from '../../img/icons/poligon_logo.png'


function logo_adm_mobile() {
  return (
    <div className='logo_adm_mobile_container'>
        <div className='logo_img'>
            <img className='logo_img' src={logo_img} alt="logo_img" />
        </div>


        
        <p className='logo_name'>food explorer</p>  
        <p className='logo_name_adm'>admin</p>
    </div>
  )
}

export default logo_adm_mobile