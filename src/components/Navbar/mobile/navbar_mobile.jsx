 import React from 'react'
 import hamburger from '../../../img/icons/hamburger.png'
 import './navbar_mobile.css'
 import logo from '../../../img/icons/poligon_logo.png'
 
 function navbar_mobile() {
   return (
     <div className='navbar_mobile_conteiner'>
        <img src={hamburger} alt="" />

        <div className='logo_mobile'>
            <img src={logo} alt="logo_mobile_img" />
            food explorer
        </div>


     
     </div>
   )
 }
 
 export default navbar_mobile