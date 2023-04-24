import LostCard from "../components/LostCard";
import FoundCard from "../components/FoundCard";
import lostarray from "../arrays/lostarray";
import foundarray from "../arrays/foundarray";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from 'axios';
import NavBar from "../components/NavBar";
function createLostEntry(lostarray)
{
    return(
        <LostCard 
            key = {lostarray.id}
            image = {lostarray.image}
            item = {lostarray.item}
            name = {lostarray.name}
            email = {lostarray.email}
            desc = {lostarray.desc}
        />
      );
}
function createFoundEntry(foundarray)
{
    return(
      <FoundCard 
        key = {foundarray.id}
        image = {foundarray.image}
        item = {foundarray.item}
        name = {foundarray.name}
        email = {foundarray.email}
        desc = {foundarray.desc}
      />
    );
}

async function sendDataToApi(data) {

  return await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/users/createItems',
    headers: {},
    data,
  })
}

export default function LostnFound() {
  
  const[title, setTitle] = useState("");
  // const[title1, setTitle1] = useState("");
  const[desc, setDesc] = useState("");
  // const[desc1, setDesc1] = useState("");
  const[whenAndwhere, setWhenAndWhere] = useState(""); 
  // const[whenAndwhere1, setWhenAndWhere1] = useState(""); 
  const[isLost, setisLost] = useState(false);
  const[isFound, setisFound] = useState(false);
  const[isSell, setisSell] = useState(false);
  const[image, setImage] = useState("");
  // const[image1, setImage1] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  function uploadImage(){
    fetch("https://localhost:5000/api/users/uploadImage", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type" : "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin" : "*",
        },
        body: JSON.stringify({
          base64: image
        })
    }).then((res) => res.json()).then((data) => console.log(data));
  }

  const PostData = async (e)=>{
    e.preventDefault();
    const resp = await sendDataToApi({
      title,
      desc,
      whenAndwhere,
      isLost,
      isFound,
      isSell,
      image
    })
    // setisLost=true
    uploadImage();
    handleSubmit();
    console.log({resp});
  }

  function convertToBase64(e)
  {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
      console.log(reader.result); //base64 
      setImage(reader.result);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  }

  // function convertToBase642(e)
  // {
  //   console.log(e);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () =>{
  //     console.log(reader.result); //base64 
  //     setImage1(reader.result);
  //   };
  //   reader.onerror = error => {
  //     console.log("Error: ", error);
  //   };
  // }

  return (
    <>
    <div className="text-2xl font-medium">
    <NavBar/>
      {/* <div className="p-10 bg-blue-950 text-white">Lost and Found</div> */}
      
      {/* LOST SECTION */}
    
        <div className="p-10">
          <div className="text-3xl p-4">Lost Section</div>
            <div className="flex gap-5 w-full">
              {lostarray.map(createLostEntry)}
            </div>
        </div>
  

      {/* FOUND SECTION */}
      <div className="p-10">
        <div className="text-3xl p-4">Found Section</div>
          <div className="flex gap-5 w-full">
            {foundarray.map(createFoundEntry)}
          </div>
      </div>
      
      {/* FORM SECTION BELOW */}
      
      {/* LOST ITEMS FORM */}
      
      <div className="m-auto justify-center text-center">

        <div className="flex flex-col justify-evenly m-10">
          
          <h1 className="text-4xl mb-0 m-10">Lost or Found Something?</h1>
          <p className="text-lg ml-10 ">
            Fill this quick form to find your belonging
          </p>
          </div>
          <form method="POST"
            onSubmit={handleSubmit}
            >
            <div className="flex">
              <div>
                <label className="m-10 text-sm mb-0 " htmlFor="">
                  Title of item
                </label>
              
                <input
                  type="text" required
                  className="border-solid border-black block m-10 p-5 "
                  placeholder="Title of item"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  />
              </div>
            
            <div>

            <label className="m-10 text-sm mb-0" htmlFor="">
              Description
            </label>
            
            <input
              type="text" required
              className="border-solid border-black block m-10 p-5"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              />
              </div>

            <div>
            <label className="m-10 text-sm mb-0" htmlFor="">
              When and where?
            </label>
            
            <input
              type="text-area" required
              className="border-solid border-black block m-10 text-md overflow-visible p-5"
              placeholder="last known where-abouts"
              value={whenAndwhere}
              onChange={(e) => setWhenAndWhere(e.target.value)}
              />
            </div>
            </div>
            <div className="flex m-10">
      
      <div className="flex flex-col gap-2 m-10">

          <label className="text-[20px]">
         <input type="radio" name="lof" onClick={(e)=>setisLost(true)} />
          I lost my item
          </label>
          <label className="text-[20px]">
          <input type="radio" name="lof" onClick={(e)=>setisFound(true)} />
          Found Something
          </label>
            </div>
          
          <br></br>
          <br></br>
          
          {/* IMAGE UPLOAD */}
          <div className="mt-10">
              <div className="auth-inner" style={{ width : "auto"}}>
                 <div ></div> Let's upload image <br></br>
                  <input 
                    accept="image/*"
                    type="file"
                    onChange={convertToBase64}
                    className="m-10 mt-0 text-sm mb-0 "
                    />
                  {image==="" || image===null? "" :<img width={100} height={100} src = {image} alt="unavailable" />}   
              </div>
            
                    </div>
            <br></br>
            
            {/* SUBMIT FORM BUTTON */}
            <button
              type="Submit"
              onClick={PostData}
              className="text-xl bg-blue-950 rounded-2xl m-auto p-2 text-white hover:text-blue-950 hover:bg-white hover:border-2"
              >
              Submit response
            </button>
         
        </div>
          </form>
        </div>
        
        {/* FOUND ITEMS FORM */}
        {/* <div className="flex flex-col p-20 w-1/2 bg-gray-900 rounded-s-full text-white">
          <h1 className="text-4xl mb-0 m-10">Found Something?</h1>
          <p className="text-lg ml-10">
            Fill this quick form and help others find their belongings!
          </p>
          <form method="POST"
            onSubmit={handleSubmit}
            >
            <label className="m-10 text-sm mb-0" htmlFor="">
              Title Item Name
            </label>
            
            <input
              type="text"
              className="border-solid border-black block m-10 text-black"
              placeholder="hello"
              value={title1}
              onChange={(e) => setTitle1(e.target.value)}
              />
            
            <label className="m-10 text-sm mb-0" htmlFor="">
              Description
            </label>
            
            <input
              type="text"
              className="border-solid border-black block m-10 text-black"
              placeholder="hello"
              value={desc1}
              onChange={(e) => setDesc1(e.target.value)}
              />
              
            <label className="m-10 text-sm mb-0" htmlFor="">
              When and where?
            </label>
            
            <input
              type="text-area" required
              className="border-solid border-black block m-10 text-md overflow-visible text-black w-1/2 p-5 pl-0"
              placeholder="last known where-abouts"
              value={whenAndwhere1}
              onChange={(e) => setWhenAndWhere1(e.target.value)}
              />
              <label>
                <input type="checkbox" onChange={(e)=>setisFound(true)} />
                qwertyu
              </label>

            <br></br>
          <br></br>
          
          {/* IMAGE UPLOAD */}
          {/* <div className="auth-wrapper">
              <div className="auth-inner" style={{ width : "auto"}}>
                  Let's upload image <br></br>
                  <input 
                    accept="image/*"
                    type="file"
                    onChange={convertToBase642}
                  />
                  {image1==="" || image1===null? "" :<img width={100} height={100} src = {image1} alt="unavailable" />}   
              </div>
          </div> */}
            
            {/* SUBMIT BUTTON */}
            {/* <button
              type="Submit"
              onClick={PostData}
              className="text-lg bg-white rounded-3xl ml-10 p-3 text-blue-950"
            >
              Submit response
            </button>
          </form>
        </div> */}


      <Footer />
    </div>
  </>
  );
}
