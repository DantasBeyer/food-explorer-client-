import './style/input.css'
import Button from './components/Button/button';
import ButtonAdm from './components/Button/buttonAdm';
import Tag from './components/Tag/tag'
import Stepper from './components/Stepper/stepper';
import Myorders from './components/MyOrders/myorders.jsx'
import Navbar from './components/Navbar/navbar';
import NavbarAdm from './components/Navbar/navbarAdm';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <NavbarAdm/>
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
