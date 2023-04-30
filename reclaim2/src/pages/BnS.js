import React from 'react'
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
  
function BnS() {
  return (
    <div>
        <NavBar />
        {/* SELL ITEMS SECTION */}
        <div className="p-10">
            <div className="text-3xl p-4">Shop or sell</div>
            <div className="flex gap-5 w-full">
            {sellarray.map(createSellEntry)}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default BnS;