import React from 'react'
import './stepper.css'
import minusImg from '../../img/icons/minus.png'
import plusImg from '../../img/icons/plus.png'


function stepper() {
  return (
      <div className='stepper'>
        <button id='minus'>
            <img src={minusImg} alt="minus_img" />
        </button>
            01
        <button id='plus'>
            <img src={plusImg} alt="plus_img" />
        </button>
      </div>
  )
}

export default stepper