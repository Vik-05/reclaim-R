import React from "react";
import { Link } from "react-router-dom";
// import Signin from "../pages/Signin";
// import Signup from "../pages/Signup";
// import logo from "./reclaimr-logo.png";

const NavBar = () => {
  return (
    <nav className=" bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-white text-4xl font-semibold">
            
              <h1>Reclaim-R</h1>
          
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/Chat"
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Chat
              </Link>

              <Link
                to="/LnF"
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Lost and Found
              </Link>

              <Link
                to="/BnS"
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Buy and Sell
              </Link>

              <Link
                to="/Profile"
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
