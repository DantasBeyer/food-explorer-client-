import React from 'react'
import './Card.css'
import dishImg from '../../img/dishes/parma.png'
import pencil from '../../img/icons/pencil.png'

function card_adm() { 
  return (
    
    <div className='card_container_adm'>

    <div className='pencil_adm'>
        <img id='pencil' src={pencil} alt="pencil_img" />
    </div>

    <div className='dish_adm'>
        <img id='cardImg' src={dishImg} alt="dish_img" />
    </div>

    <div className='title_adm'>
        <p>
        Torradas de Parma 
        </p>
    </div>

    <div className='sub_title_adm'>
        <p>
          Presunto de parma e rúcula em um pão com fermentação natural.
        </p>
      </div>
    
    <div className='price_adm'>
        <p>
        € 7,00
        </p>
    </div>

    </div>
  
  )
}

export default card_adm