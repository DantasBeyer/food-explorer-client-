import "./style/input.css";
import Button from "./components/Button/Button";
import ButtonAdm from "./components/Button/ButtonAdm";
import Tag from "./components/Tag/Tag";
import Stepper from "./components/Stepper/Stepper";
import Myorders from "./components/MyOrders/Myorders.jsx";
import Navbar from "./components/Navbar/Navbar";
import NavbarAdm from "./components/Navbar/Navbar_adm";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/meals/CardParma";
import CardsAdm from "./components/Cards/Card_adm";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import AuthenticationPage from "./Pages/Authentication/AuthenticationPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    Route
    {  /*  <Navbar />
    <Cards/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details" element={<Details />} />
    <Route path="auth" element={<AuthenticationPage/>}/>
    <Route path="card" element={<Cards/>}/>
      </Routes>
      <Footer /> */}
      {/* 
    
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
      
    <Tag/> */}
    </div>
  );
}

export default App;
