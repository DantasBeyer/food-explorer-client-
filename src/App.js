import './style/input.css'
import Button from './components/Button/button';
import ButtonAdm from './components/Button/buttonAdm';
import Tag from './components/Tag/tag'
import Stepper from './components/Stepper/stepper';
import Myorders from './components/MyOrders/myorders.jsx'
import Myorders_mobile from './components/MyOrders/myorders_mobile.jsx'
import Navbar from './components/Navbar/navbar';
import NavbarAdm from './components/Navbar/navbar_adm';
import NavbarMobile from './components/Navbar/mobile/navbar_mobile';
import NavbarMobileAdm from './components/Navbar/mobile/navbar_mobile_adm';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
    
    {  /* <Navbar/>
    <NavbarMobile/>
      <NavbarAdm/> 
      <NavbarMobileAdm/>
      <br/>
      <Button/>
      <ButtonAdm/>
      <br/>
      <Myorders/>
      <Myorders_mobile/>
      <Stepper/> 
      <Tag/> */}
      <Footer/>
    </div>
  );
}

export default App;
