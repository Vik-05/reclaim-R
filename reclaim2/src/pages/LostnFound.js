import Card from "../components/Card";
import FoundCard from "../components/FoundCard";
import Footer from "../components/Footer";
export default function LostnFound() {
  
  
  
  return (
    <div className="text-4xl font-medium">
      <div className="p-10 bg-blue-950 text-white">Lost and Found</div>
      <div className="p-10">
        <div className="text-3xl p-4">Lost Section</div>
        <Card />
      </div>
      <div className="p-10">
        <div className="text-3xl p-4">Found Section</div>
        <FoundCard />
      </div>
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
  );
}
