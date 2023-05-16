import React, { useState } from "react";
import "./Slider.css";
import CardParma from "../Cards/CardParma";
import CardPeachy from "../Cards/CardPeachy";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cards = [<CardParma />, <CardPeachy />];

  function nextSlide() {
    setCurrentSlide((oldSlide) => {
      let nextSlide = oldSlide + 1;
      if (nextSlide >= cards.length) {
        nextSlide = 0;
      }
      return nextSlide;
    });
  }

  function prevSlide() {
    setCurrentSlide((oldSlide) => {
      let prevSlide = oldSlide - 1;
      if (prevSlide < 0) {
        prevSlide = cards.length - 1;
      }
      return prevSlide;
    });
  }

  return (
    <div className="slider_container">
      <button onClick={prevSlide}>Anterior</button>
      {cards[currentSlide]}
      <button onClick={nextSlide}>Próximo</button>
    </div>
  );
}

export default Slider;
