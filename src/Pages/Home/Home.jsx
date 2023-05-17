import React from "react";
import SliderDesserts from "../../components/Slider/SliderDesserts";
import SliderMeals from "../../components/Slider/SliderMeals";
import SliderDrinks from "../../components/Slider/SliderDrinks";
import "./home.css";

function Home() {
  return (
    <div className="home_container">
    
      <SliderMeals />
      <SliderDesserts />
      <SliderDrinks />
    </div>
  );
}

export default Home;
