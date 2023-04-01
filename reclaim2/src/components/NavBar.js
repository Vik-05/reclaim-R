import {Link} from "react-router-dom";
export default function NavBar(){
     const handlechange  = event =>{ } 
    return(
        <div>
        <div>
          <Link onClick={handlechange} to="/Found">Found</Link>
        </div>
        <div>
          <Link onClick={handlechange} to="/Home">Home</Link>
        </div>
        <div>
          <Link onClick={handlechange} to="/Lost">Lost</Link>
        </div>
        <div>
          <Link onClick={handlechange} to="/Sell">Sell</Link>
        </div>
        <div>
          <Link onClick={handlechange} to="/Donate">Donate</Link>
        </div>
        </div>
    )
}