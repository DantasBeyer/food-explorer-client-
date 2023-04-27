import './style/input.css'
import Button from './components/Button/button';
import ButtonAdm from './components/Button/buttonAdm';
import Tag from './components/Tag/tag'
import Stepper from './components/Stepper/stepper';
import Myorders from './components/MyOrders/myorders.jsx'
import Navbar from './components/Navbar/navbar';
import NavbarAdm from './components/Navbar/navbar_adm';
import NavbarMobile from './components/Navbar/mobile/navbar_mobile';
import NavbarMobileAdm from './components/Navbar/mobile/navbar_mobile_adm';

function App() {
  return (
    <div className="App">
     
   <Navbar/>
      <NavbarAdm/> 
      <NavbarMobile/>
      <NavbarMobileAdm/>
       <br/>
      <Button/>
      <ButtonAdm/>
      <br/>
      <Tag/>
      <Stepper/> 
      <Myorders/>
    </div>
  );
}

export default App;
