import {Link} from "react-router-dom"

const Navigation = ()=>{

return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link to ="/mercuary" className="nav-link">Mercuary</Link>
        </li>

        <li className="nav-item">
         <Link to ="/venus" className="nav-link">Venus</Link>
        </li>

        <li className="nav-item">
        <Link to ="/earth" className="nav-link">Earth</Link>
        </li>
        <li className="nav-item">
        <Link to ="/mars" className="nav-link">Mars</Link>
        </li>
        <li className="nav-item">
        <Link to ="/jupiter" className="nav-link">Jupiter</Link>
        </li>
        <li className="nav-item">
        <Link to ="/saturn" className="nav-link">Saturn</Link>
        </li>
        <li className="nav-item">
        <Link to ="/urnus" className="nav-link">Uranus</Link>
        </li>
        <li className="nav-item">
        <Link to ="/neptune" className="nav-link">Neptune</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
);

}

export default Navigation;