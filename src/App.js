import './style/input.css'
import Button from './components/Button/button';
import Tag from './components/Tag/tag'
import Stepper from './components/Stepper/stepper';
import Myorders from './components/MyOrders/myorders.jsx'
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <br/>
      <Button/>
      <br/>
      <Tag/>
      <Stepper/> 
      <Myorders/>
      
    </div>
  );
}

export default App;
