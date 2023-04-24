import SellCard from "../components/SellCard";
import sellarray from "../arrays/sellarray";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function createSellEntry(sellarray){
  return(
      <SellCard
          key = {sellarray.id}
          image = {sellarray.image}
          item = {sellarray.item}
          name = {sellarray.name}
          email = {sellarray.email}
          desc = {sellarray.desc}
      />
    );
}

async function sendDataToApi(data) {

  return await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/users/sellItems',
    headers: {},
    data,
  })
}

export default function Sell() {
 
  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");
  const[price, setPrice] = useState("");
  const[sold, setisSold] = useState(false);
  const[image, setImage] = useState("");

  const notify = () => toast("Wow so easy!");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  function uploadImage(){
    fetch("https://localhost:5000/api/users/uploadSellImage", {
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
      image,
      title,
      desc,
      price,
      sold
    })
    // setisLost=true
    uploadImage();
    notify();
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

  
  return (
    <div className="text-4xl font-medium">
      <NavBar/>
      {/* <div className="p-10 dark:bg-gray-900 text-white">Buy and Sell</div> */}
      
      {/* SELL ITEMS SECTION */}
      <div className="p-10">
        <div className="text-3xl p-4">Shop or sell</div>
        <div className="flex gap-5 w-full">
          {sellarray.map(createSellEntry)}
        </div>
      </div>
      
      {/* SELL FORM BELOW */}
      <div className="flex justify-center">
        <div className="flex flex-col p-10 rounded-lg">
          <h1 className="text-4xl mb-0 m-10">Want to sell something?</h1>
          <p className="text-lg ml-10">Sell your belongings here!!</p>
          
          <form method="POST" 
            onSubmit={handleSubmit}
            className="flex flex-col justify-center"
          >
            <div className="flex">
              <>
                <label className="m-10 text-sm mb-0 rounded-md" htmlFor="">
                  Title
                </label>
                
                <input
                  type="text"
                  className="border-solid border-black block m-10"
                  placeholder="Item-Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              
              </>
              <>
                <label className="m-10 text-sm mb-0 rounded-md" htmlFor="">
                  Price
                </label>
                
                <input
                  type="text"
                  className="border-solid border-black block m-10"
                  placeholder="Price Offered"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              
              </>
            </div>
            
            <label className="m-10 text-sm mb-0 rounded-md" htmlFor="">
              Description
            </label>
            
            <input
              type="text-area"
              className="border-solid border-black block m-10"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            
            <div className="flex flex-col gap-4 m-10">
              <label>
                <input type="radio" name="lof" onChange={(e)=>setisSold(true)} />
                  Sold item
              </label>
            </div>
            
         
          {/* IMAGE UPLOAD */}
          <div className="m-10">
              <div className="auth-inner" style={{ width : "auto"}}>
                  Let's upload image <br></br>
                  <input 
                    accept="image/*"
                    type="file"
                    onChange={convertToBase64}
                    />
                  {image==="" || image===null? "" :<img width={100} height={100} src = {image} alt="unavailable" />}   
              </div>
            
                    </div>
            <br></br>
            
            <>
              {/* SUBMIT FORM BUTTON */}
            <button
              type="Submit"
              onClick={PostData}
              className="text-xl bg-blue-950 rounded-2xl m-10 p-2 text-white hover:text-blue-950 hover:bg-white hover:border-2"
              >
              Sell Item
            </button>
            <ToastContainer />
              
              {/* <button className="text-lg dark:bg-gray-900 w-48 m-2 rounded-3xl ml-10 p-3 text-white">
                Donate
              </button>
             */}
            </>
          </form>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}
