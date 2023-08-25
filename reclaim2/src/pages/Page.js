import Chat from "./Chat";
import Sell from "./Sell";
import LostnFound from "./LostnFound";
import Signin from "./Signin";
import Signup from "./Signup";
// import NavBar from "../components/NavBar";
import Profile from "./Profile";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LnF from "./lnf";
import BnS from "./BnS";
export default function Page() {
  return (
    <div>
      <Routes>
        {/* <Route 
          path="navbar"
          element={
            <>
              <NavBar />
            </>
          }
        ></Route> */}
        <Route
          path="/signin"
          element={
            <>
              <Signin />
            </>
          }
        ></Route>
        <Route
          path="signup"
          element={
            <>
              <Signup />
            </>
          }
        ></Route>
        <Route path="signin" element={<Signin />}></Route>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route path="lost-found" element={<LostnFound />}></Route>
        <Route path="Sell" element={<Sell />}></Route>
        <Route path="Chat" element={<Chat />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="LnF" element={<LnF />}></Route>
        <Route path="BnS" element={<BnS />}></Route>
      </Routes>
    </div>
  );
}
