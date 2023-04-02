import SellCard from "../components/SellCard";
import Footer from "../components/Footer";
export default function Sell() {
  return (
    <div className="text-4xl font-medium">
      <div className="p-10 dark:bg-gray-900 text-white">Buy and Sell</div>
      <div className="p-10">
        <div className="text-3xl p-4">Shop or sell</div>
        <SellCard />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col p-10 rounded-lg">
          <h1 className="text-4xl mb-0 m-10">Want to sell something?</h1>
          <p className="text-lg ml-10">Sell your belongings here!!</p>
          <form>
            <label className="m-10 text-sm mb-0 rounded-md" htmlFor="">
              item name
            </label>
            <input
              type="text"
              className="border-solid border-black block m-10"
              placeholder="hello"
            />
            <label className="m-10 text-sm mb-0 rounded-md" htmlFor="">
              Description
            </label>
            <input
              type="text"
              className="border-solid border-black block m-10"
              placeholder="hello"
            />
            <label className="m-10 text-sm mb-0 rounded-md" htmlFor="">
              Price
            </label>
            <input
              type="text"
              className="border-solid border-black block m-10"
              placeholder="Price Offered"
            />
            <button
              type="Submit"
              className="text-lg dark:bg-gray-900 rounded-3xl ml-10 p-3 text-white"
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