import React from 'react'
import '../card.css'
import dishImg from '../../../img/dishes/parma.png'
import heartImg from '../../../img/icons/heart.png'
import heartClickedImg from '../../../img/icons/heart_clicked.png'
import Stepper from '../../Stepper/stepper'
import Button from '../../Button/button'



function card() {
  return (
    <div className='card_container_mobile'>

      <div className='heart_mobile'>
        <img id='heart' src={heartImg} alt="hear_img" />
      </div>

      <div className='dish_mobile'>
        <img id='cardImg' src={dishImg} alt="dish_img" />
      </div>

      <div className='title_mobile'>
        <p>
          Torradas de Parma 
        </p>
      </div>

    
      
      <div className='price_mobile'>
        <p>
          € 7,00
        </p>
      </div>

      <div className='interaction_mobile'>
        <Stepper/>
        <Button/>
      </div>
      

    </div>
  )
}

export default card