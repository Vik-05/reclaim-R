import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

async function sendDataToApi(data) {

  return await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/users/signup',
    headers: {},
    data,
  })
}

const handlechange=(event)=>{

}

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setdob] = useState("");
  const [phone, setPhone] = useState("");
  const [addres, setAddres] = useState("");
  const[photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const PostData = async (e)=>{
    e.preventDefault();
    const resp = await sendDataToApi({
      fullName,
      email,
      password,
      dob,
      phone,
      addres,
      photo
    })
    handleSubmit();
    console.log({resp});
  }

  return (
    <div className="h-screen flex items-center justify-center">
    <div className="flex h-5/6 w-11/12 bg-gray-200 rounded-[55px] border-4 border-blue-950">
      <div className="w-1/2 flex text-center flex-col bg-blue-950 items-center justify-center rounded-l-[50px]  border-5 border-blue-950 ">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome Back</h1>
        <p className="text-lg text-white mb-8">
          To keep continuing with the services please login
        </p>
        <Link onClick={()=>{}} to="/signin"><button class="bg-white text-black rounded-xl px-10 py-4 font-bold hover:bg-gray-200 focus:outline-none">Login</button>
     </Link>
      </div>
      <div className="w-1/2 text-center flex flex-col items-center justify-center">
        <form method="POST"
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-10 h-full rounded-r-[50px] shadow-md"
        >
          <h2 className="text-5xl font-bold mb-4">Sign Up</h2>
          <input
            type="text" required
            placeholder="Name"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email" required
            placeholder="email"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={addres}
            onChange={(e) => setAddres(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone no"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="DOB"
            className="w-full border-b border-black focus:border-black outline-none mb-4 p-2"
            value={dob}
            onChange={(e) => setdob(e.target.value)}
          />
          
< div className="w-full justify-evenly">
          <div className="inline w-1/2 text-left">
          <label>Upload your Id</label>
          </div>
          <div className="inline w-1/2">
          <input
            type="file"
            accept="image/*"
            className="w-1/2 border-b border-black focus:border-black outline-none mb-4 p-2"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          </div>
</div>
          <button
            type="submit"
            onClick={PostData}
            className="bg-blue-950 text-white rounded-xl py-2 px-10 hover:bg-blue-800"
          >
    <Link to="/signin" onClick={handlechange}>Sign up</Link>
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;