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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
