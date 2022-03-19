import {Link,useNavigate} from "react-router-dom";

const Home = ()=>{
    let navigate = useNavigate();

    const clickHandler =(event)=>{
        navigate("/mercuary");
        console.log(event);
    }

    return(<div onClick={clickHandler}>
    
    <div className="mercuary-orbit">
    
    <div className="mercuary-radius">
        
    </div>
    </div>
    

<div className="venus-orbit">
<div className="venus-radius"></div>
</div>
<div className="earth-orbit">
<div className="earth-radius"></div>
</div>
<div className="mars-orbit">
<div className="mars-radius"></div>
</div>
<div className="jupiter-orbit">
<div className="jupiter-radius"></div>
</div>
<div className="saturn-orbit">
<div className="saturn-radius"></div>
</div>

<div className="uranus-orbit">
<div className="uranus-radius"></div>
</div>

<div className="neptune-orbit">
<div className="neptune-radius"></div>
</div>


    </div>);

}

export default Home;