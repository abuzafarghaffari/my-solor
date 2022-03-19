import {Routes, Route} from "react-router-dom";
import "./sass/main.scss";
import './App.css';
import Home from "./components/Home";
import Mercuary from "./routes/Mercuary";
import Navigation from "./components/Navigation";
import Mars from "./routes/Mars";
import Venus from "./routes/Venus";
import Earth from "./routes/Earth";
import Jupiter from "./routes/Jupiter";
import Saturn from "./routes/Saturn";
import Uranus from "./routes/Uranus";
import Neptune from "./routes/Neptune";
function App() {
  return (
    <div>
    <Navigation />
    <Routes>
<Route path="/" element={<Home />}/>
  <Route path ="/mercuary" element={<Mercuary />} />    
  <Route path ="/venus" element={<Venus />} />    
  <Route path ="/earth" element={<Earth />} />    
  <Route path ="//mars" element={<Mars />} />    
  <Route path ="/jupiter" element={<Jupiter />} />    
  <Route path ="/saturn" element={<Saturn />} />    
  <Route path ="/urnus" element={<Uranus />} />    
  <Route path ="/neptune" element={<Neptune/>} />    
   
    </Routes>
    </div>
  );
}

export default App;
