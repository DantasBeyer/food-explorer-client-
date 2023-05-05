import React from 'react'
import './card.css'
import dishImg from '../../img/dishes/parma.png'
import heartImg from '../../img/icons/heart.png'
import heartClickedImg from '../../img/icons/heart_clicked.png'
import Stepper from '../Stepper/Stepper'
import Button from '../Button/button'



function card() {
  return (
    <div className='card_container'>

    
      <div className='heart'>
        <img id='heart' src={heartImg} alt="hear_img" />
      </div>

      <div className='dish'>
        <img id='cardImg' src={dishImg} alt="dish_img" />
      </div>

      <div className='title'>
        <p>
          Torradas de Parma 
        </p>
      </div>

      <div className='sub_title'>
        <p>
          Presunto de parma e rúcula em um pão com fermentação natural.
        </p>
      </div>
      
      <div className='price'>
        <p>
          € 7,00
        </p>
      </div>

      <div className='interaction'>
        <Stepper/>
        <Button/>
      </div>
      

    </div>
  )
}

export default card