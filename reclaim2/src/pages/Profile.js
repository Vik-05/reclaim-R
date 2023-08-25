// import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Profile(){
    return(
        <div className="bg-blue-100">
        <NavBar/>
        <div className="flex gap-16 text-center p-16 h-full">
        <div>
        <img src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0" className="rounded-full" width="250px" alt="Profile"/>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold m-4 py-2 px-4 rounded inline-flex items-center">Edit Profile</button>
        </div>
       <div className="flex flex-col gap-10 justify-center">
      <div className="text-xl text-start ">
      <b>Name</b> 
      <div className="bg-white p-2 rounded-full text-center">
      Sam Sharma
      </div>
      </div>
      <div className="text-xl text-start ">
      <b>Email</b>
      <div className="bg-white p-2 rounded-full text-center">
      sam24@gmail.com
      </div>
      </div>
      <div className="text-xl text-start ">
      <b>
      Phone Number
      </b>
      <div className="bg-white p-2 rounded-full text-center">
      8133264453
      </div> 
      </div>
      </div>
      <div className="pl-10">
      <div className="text-xl text-start ">
      <b>
      Address
      </b>
      <div className="bg-white p-4 rounded-full text-center">
      A-5 Tilak Nagar New Delhi
      </div> 
      </div>
      </div>
      </div>
      {/* <Footer /> */}
      </div>
      )
    }
