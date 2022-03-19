import mercury from "../img/mercury.jpg";
import {planets} from "./PlanetsData";
const Mercuary = ()=>{

    return(<div className="container-fluid mt-5">
    <div className="row">
        <div className="col-md-7"><img src={mercury} className="rounded mx-auto d-block h-75"/></div>
        <div className="col-md-5">
        <h1>{planets[0].name}</h1> 
        <p>{planets[0].desc}</p>
        
        <div className="row mt-5">
        <div className="col"><h3>diameter</h3><p>{planets[0].diameter}</p></div>
        <div className="col"><h3> moons </h3><p>{planets[0].moons}</p></div>
        
    </div>

        </div>
    </div>
    
    </div>)
}

export default Mercuary;