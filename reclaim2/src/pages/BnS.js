import React from "react";
import SellCard from "../components/SellCard";
import sellarray from "../arrays/sellarray";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function createSellEntry(sellarray) {
  return (
    <SellCard
      key={sellarray.id}
      image={sellarray.image}
      item={sellarray.item}
      name={sellarray.name}
      email={sellarray.email}
      desc={sellarray.desc}
    />
  );
}

function BnS() {
  return (
    <div>
      <NavBar />
      {/* SELL ITEMS SECTION */}
      <div className="flex flex-col gap-10 p-10 justify-center">
        <div className="text-3xl p-4">Shop or sell</div>
        <div className="flex overflow-x-auto space-x-8 ">
          {sellarray.map(createSellEntry)}
        </div>
        <button className="m-auto">
          <Link
            to="/Sell"
            className="bg-blue-950 p-5 text-white font-bold text-lg rounded-full"
          >
            Click here to Sell something
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default BnS;
