import Donate from "./Donate"
import Sell from "./Sell"
import LostnFound from "./LostnFound"
import Signin from "./Signin"
import Signup from "./Signup"
import { Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
export default function Page(){
    return(
        <div>
   
        <Routes>
        <Route path="/" element={<><Signin /></>}></Route>
          <Route path="signup" element={<><Signup /></>}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="home" element={<><Home /></>}></Route>
          <Route path="lost-found" element={<LostnFound />}></Route>
          <Route path="Sell" element={<Sell />}></Route>
          <Route path="Donate" element={<Donate />}></Route>
        </Routes>
   
        </div>
    )
}