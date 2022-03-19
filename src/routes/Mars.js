import mars from "../img/mars.jpg";
import {planets} from "./PlanetsData";
const Mars = ()=>{

    return(<div className="container-fluid mt-5">
    <div className="row">
        <div className="col-md-7"><img src={mars} className="rounded mx-auto d-block h-75"/></div>
        <div className="col-md-5">
        <h1>{planets[3].name}</h1> 
        <p>{planets[3].desc}</p>
        
        <div className="row mt-5">
        <div className="col"><h3>diameter</h3><p>{planets[3].diameter}</p></div>
        <div className="col"><h3> moons </h3><p>{planets[3].moons}</p></div>
        
    </div>

        </div>
    </div>
    
    </div>)
}

export default Mars;