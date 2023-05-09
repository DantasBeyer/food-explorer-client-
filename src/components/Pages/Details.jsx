import React from 'react'
import './Details.css'
import parmaImg from '../../img/dishes/parma.png'

function Details() {
  return (
    <div className='Details_component'>

    <section className='img'>
      <img src={parmaImg} alt="parma_img" />
    </section>
    
    </div>
  )
}

export default Details