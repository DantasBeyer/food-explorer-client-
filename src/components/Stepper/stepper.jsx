import React from 'react'
import './Stepper.css'
import minusImg from '../../img/icons/minus.png'
import plusImg from '../../img/icons/plus.png'
import { useState } from 'react'


function Stepper() {
  const [count, setCount] = useState (0);

  const increcementCount = () => {
    setCount(count + 1)
  };

  const decrementCount = () => {
    setCount (count - 1)
  };


  return (
      <div id='stepper_container'>
        <button onClick={decrementCount} id='minus'>
            <img  src={minusImg} alt="minus_img" />
        </button>
            {count}
        <button onClick={increcementCount} id='plus'>
            <img src={plusImg} alt="plus_img" />
        </button>
      </div>
  )
}

export default Stepper;