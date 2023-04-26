import React from 'react'
import './myorders.css'
import receptImg from '../../img/icons/recept.png'

function myorders() {
  return (
    <div id='my_orders'>
        <img src={receptImg} alt="recept_img" />
        <p>My order (0)</p>
    </div>
  )
}

export default myorders