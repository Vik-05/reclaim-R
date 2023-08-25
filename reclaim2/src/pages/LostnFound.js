import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "../components/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const[desc, setDesc] = useState("");
  const[whenAndwhere, setWhenAndWhere] = useState(""); 
  const[isLost, setisLost] = useState(false);
  const[isFound, setisFound] = useState(false);
  const[isSell, setisSell] = useState(false);
  const[image, setImage] = useState("");
  
  const[data, setData] = useState([]);
 
  useEffect(() => {
    async function FoundData() {
      try {
        const res = await fetch("http://localhost:5000/api/users/foundItems", {
          method: "GET",
        });
        const founddata = await res.json();
        console.log(founddata);
        setData(founddata.data);
      } catch (error) {
        console.error(error);
      }
    }

    async function LostData() {
      try {
        const res = await fetch("http://localhost:5000/api/users/lostItems", {
          method: "GET",
        });
        const data = await res.json();
        console.log(data);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }

      console.log(data);
    }
    FoundData();
    LostData();
  }, []);

  const notify = () => toast("item updated successfully!");
  
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
    <>
    <div>
    <NavBar/>
      {/* LOST ITEMS AND FOUND ITEMS IN ONE FORM */}
     
      <div className="m-10 rounded-xl border-2 justify-center text-center p-5">

        <div className="flex flex-col justify-evenly m-10 mt-0" >
          
          <h1 className="text-4xl mb-0 m-10">Lost or Found Something?</h1>
          <p className="text-lg">
            Fill this quick form to find your belonging
          </p>
        
        </div>
        
        <form method="POST"
            onSubmit={handleSubmit}
            >
            <div className="flex justify-center">
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
            
            <div className="flex m-10 justify-center">
      

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
            <ToastContainer />
         
        </div>
        </form>
        </div>
      <Footer />
    </div>
  </>
  );
}
