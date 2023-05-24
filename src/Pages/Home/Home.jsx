import React from "react";
import SliderDesserts from "../../components/Slider/SliderDesserts";
import SliderMeals from "../../components/Slider/SliderMeals";
import SliderDrinks from "../../components/Slider/SliderDrinks";
import headerImg from "../../img/icons/macaronsHome.png";
import "./home.css";
import "../../style/tailwind.css";

function Home() {
  return (
    <div className="home_container">
      <header className="header">
        <img src={headerImg} alt="header_img" />

        <div className="slogam">
          <p>Sabores inigualáveis</p>
          <p>Sinta o cuidado do preparo com ingedientes selecionados</p>
        </div>
      </header>

      <SliderMeals />
      <SliderDesserts />
      <SliderDrinks />
    </div>
  );
}

export default Home;
