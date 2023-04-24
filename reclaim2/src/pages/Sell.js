import SellCard from "../components/SellCard";
import sellarray from "../arrays/sellarray";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
export default function Sell() {
  return (
    
    <div className="text-4xl font-medium">
      <NavBar/>
      {/* <div className="p-10 dark:bg-gray-900 text-white">Buy and Sell</div> */}
      
      {/* BUY AND SELL ITEMS SECTION */}
      <div className="p-10">
        <div className="text-3xl p-4">Shop or sell</div>
        <div className="flex gap-5 w-full">
          {sellarray.map(createSellEntry)}
        </div>
      </div>
      
      {/* BUY AND SELL FORM BELOW */}
      <div className="flex justify-center">
        <div className="flex flex-col p-10 rounded-lg">
          <h1 className="text-4xl mb-0 m-10">Want to sell something?</h1>
          <p className="text-lg ml-10">Sell your belongings here!!</p>
          <form className="flex flex-col justify-center">
            <div className="flex">
              <>
                <label className="m-10 text-sm mb-0 rounded-md" htmlFor="">
                  item name
                </label>
                <input
                  type="text"
                  className="border-solid border-black block m-10"
                  placeholder="Item-Name"
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
            />
            <>
              <button
                type="Submit"
                className="text-lg dark:bg-gray-900 w-48 m-2 rounded-3xl ml-10 p-3 text-white"
              >
                Sell
              </button>
              <button className="text-lg dark:bg-gray-900 w-48 m-2 rounded-3xl ml-10 p-3 text-white">
                Donate
              </button>
            </>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
