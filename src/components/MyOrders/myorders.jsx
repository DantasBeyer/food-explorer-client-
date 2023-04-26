import React from 'react'
import './myorders.css'
import receptImg from '../../img/icons/recept.png'

function myorders() {
  return (
    <div id='my_orders_container'>
        <img src={receptImg} alt="recept_img" />
        <p>My orders (0)</p>
    </div>
  )
}

export default myorders