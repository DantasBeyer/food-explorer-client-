import React from 'react'
import logo_img from '../../img/icons/poligon_logo.png'
import './Logo.css'

function Logo() {
  return (
    <div className='logo_container_adm'>
        <div className='logo_img'>
            <img src={logo_img} alt="logo_img" />
        </div>


        <section>
            <p className='logo_name'>food explorer</p>  
            <p className='logo_name_adm'>admin</p>
        </section>

    </div>
  )
}

export default Logo