import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Lost from "./lost";
import Found from "./found";
import Sell from "./sell";
import Donate from "./donate";
import { useState, useEffect} from "react";

export default function Page() {
  
  const[divi, setDivi] = useState("refresh");
  return (
    
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<><Login /></>}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="Lost" element={<Lost />}></Route>
          <Route path="Found" element={<Found />}></Route>
          <Route path="Sell" element={<Sell />}></Route>
          <Route path="Donate" element={<Donate />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
