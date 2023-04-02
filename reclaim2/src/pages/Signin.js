import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [fullName, setFullName] = useState("");
//   const [collegeName, setCollegeName] = useState("");
  const [password, setpassword] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="h-screen flex items-center justify-center">
    <div className="flex h-5/6 w-11/12 bg-gray-200 rounded-[55px] border-4 border-blue-950">
      <div className="w-1/2 text-center flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-10 h-full rounded-l-[50px] shadow-md"
        >
          <h2 className="text-5xl font-bold mb-4">Login</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enrollment Number"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={enrollmentNumber}
            onChange={(e) => setEnrollmentNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-950 text-white rounded-xl py-2 px-10 hover:bg-blue-800"
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-1/2 flex text-center flex-col bg-blue-950 items-center justify-center rounded-r-[50px]  border-5 border-blue-950 ">
        <h1 className="text-4xl text-white font-bold mb-4">Hey Mate!</h1>
        <p className="text-lg text-white mb-8">
          Enter your details to use services of ReclaimR
        </p>
        <Link onClick={()=>{}} to="/signup">  <button class="bg-white text-black rounded-xl px-10 py-4 font-bold hover:bg-gray-200 focus:outline-none">Sign Up</button>
      </Link>
      </div>
    </div>
    </div>
  );
};

export default Signin;