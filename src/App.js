import Footer from './components/Footer/footer';
import Button from './components/Button/button';
import Tag from './components/Tag/tag'
import Stepper from './components/Stepper/stepper';
import './style/input.css'
import Myorders from './components/MyOrders/myorders.jsx'

function App() {
  return (
    <div className="App">
      <Footer/>
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
