import LostCard from "../components/LostCard";
import FoundCard from "../components/FoundCard";
import lostarray from "../arrays/lostarray";
import foundarray from "../arrays/foundarray";
import Footer from "../components/Footer";


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

export default function LostnFound() {
  return (
  <>
    
    <div className="text-2xl font-medium">
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
      
      <div className="flex">
        <div className="flex flex-col justify-between w-1/2 m-10">
          <h1 className="text-4xl mb-0 m-10">Lost Something?</h1>
          <p className="text-lg ml-10">
            Fill this quick form to find your belonging
          </p>
          <form method="GET">
            <label className="m-10 text-sm mb-0" htmlFor="">
              item name
            </label>
            <input
              type="text"
              className="border-solid border-black block m-10"
              placeholder="hello"
            />
            <label className="m-10 text-sm mb-0" htmlFor="">
              Description
            </label>
            <input
              type="text"
              className="border-solid border-black block m-10"
              placeholder="hello"
            />
            <label className="m-10 text-sm mb-0" htmlFor="">
              When and where?
            </label>
            <input
              type="text-area"
              className="border-solid border-black block m-10 text-md overflow-visible w-1/2 p-5 pl-0"
              placeholder="last known where-abouts"
            />
            <button
              type="Submit"
              // onClick={GetData}
              className="text-lg bg-blue-950 rounded-3xl ml-10 p-3 text-white"
            >
              Submit response
            </button>
          </form>
        </div>
        <div className="flex flex-col p-20 w-1/2 bg-gray-900 rounded-s-full text-white">
          <h1 className="text-4xl mb-0 m-10">Found Something?</h1>
          <p className="text-lg ml-10">
            Fill this quick form and help others find their belongings!
          </p>
          <form>
            <label className="m-10 text-sm mb-0" htmlFor="">
              Item Name
            </label>
            <input
              type="text"
              className="border-solid border-black block m-10"
              placeholder="hello"
            />
            <label className="m-10 text-sm mb-0" htmlFor="">
              Description
            </label>
            <input
              type="text"
              className="border-solid border-black block m-10"
              placeholder="hello"
            />
            <button
              type="Submit"
              className="text-lg bg-white rounded-3xl ml-10 p-3 text-blue-950"
            >
              Submit response
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  </>
  );
}
