import Donate from "./Donate"
import Sell from "./Sell"
import LostnFound from "./LostnFound"
import Signin from "./Signin"
import Signup from "./Signup"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
export default function Page(){
    return(
        <div>
        <Router>
        <Routes>
          <Route path="signup" element={<><Signup /></>}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="lost-found" element={<LostnFound />}></Route>
          <Route path="Sell" element={<Sell />}></Route>
          <Route path="Donate" element={<Donate />}></Route>
        </Routes>
      </Router>
        </div>
    )
}