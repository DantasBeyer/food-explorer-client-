import React from 'react'
import './footer.css'
import DishesImgParma from '../../img/dishes/parma.png'

function footer() {
  return (
    
    <div className='footer'>
        <p>home</p>
        <p>tutorials</p>
        <p>about</p>
        <p>contact</p>
        <img src={DishesImgParma} alt="parma" />
    </div>
    
  )
}

export default footer