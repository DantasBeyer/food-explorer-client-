import "./style/input.css";
import Button from "./components/Button/Button";
import ButtonAdm from "./components/Button/ButtonAdm";
import Tag from "./components/Tag/Tag";
import Stepper from "./components/Stepper/Stepper";
import Myorders from "./components/MyOrders/Myorders.jsx";
import Navbar from "./components/Navbar/Navbar";
import NavbarAdm from "./components/Navbar/Navbar_adm";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Card";
import CardsAdm from "./components/Cards/Card_adm";
import Details from "./components/Details/Details.jsx";
import AuthenticationPage from "./Pages/Authentication/AuthenticationPage";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
      {/* 
    <AuthenticationPage />
    <Details />
    <NavbarAdm/> 
  
      <br/>
      <Button/>
      <ButtonAdm/>
      <br/>
      <Myorders/>
      <Myorders_mobile/>
      <CardsMobile/>
      <CardsMobileAdm/>
      <Stepper/> 
      <CardsAdm/>
      <Cards/>
    <Tag/> */}
    </div>
  );
}

export default App;
