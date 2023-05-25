import "./style/input.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
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
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/details" element={<Details />} />
        {/*     <Route path="/sigin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
