import './style/input.css'
import Button from './components/Button/Button';
import ButtonAdm from './components/Button/ButtonAdm';
import Tag from './components/Tag/tag'
import Stepper from './components/Stepper/Stepper';
import Myorders from './components/MyOrders/myorders.jsx'

import Navbar from './components/Navbar/navbar';
import NavbarAdm from './components/Navbar/navbar_adm';


import Footer from './components/Footer/footer';
import Cards from './components/Cards/Card'

import CardsAdm from './components/Cards/Card_adm'


function App() {
  return (
    <div className="App">
    <NavbarAdm/> 

    <Navbar/>
    {  /* 
      <br/>
      <Button/>
      <ButtonAdm/>
      <br/>
      <Myorders/>
      <Myorders_mobile/>
      <Footer/>
      <CardsMobile/>
      <CardsMobileAdm/>
      <Stepper/> 
      <CardsAdm/>
    <Tag/> */} 
    <Cards/>
    </div>
  );
}

export default App;
