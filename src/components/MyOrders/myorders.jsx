import React from 'react'
import './myorders.css'
import receptImg from '../../img/icons/recept.png'

function myorders() {
  return (
      <div className='btn_container'>
        <img src={receptImg} alt="recept_img" />
        My Orders (0)
      </div>
  )
}

export default myorders