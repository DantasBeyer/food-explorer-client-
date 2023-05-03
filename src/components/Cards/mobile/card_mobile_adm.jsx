import React from 'react'
import '../card.css'
import dishImg from '../../../img/dishes/parma.png'
import pencilImg from '../../../img/icons/pencil.png'




function card() {
  return (
    <div className='card_container_mobile'>

      <div className='pencil_mobile_adm'>
        <img id='pencil' src={pencilImg} alt="pencil_img" />
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

     

    </div>
  )
}

export default card