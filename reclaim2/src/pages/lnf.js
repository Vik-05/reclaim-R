import React from "react";
import NavBar from "../components/NavBar";
import lostarray from "../arrays/lostarray";
import foundarray from "../arrays/foundarray";
import LostCard from "../components/LostCard";
import FoundCard from "../components/FoundCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function createLostEntry(lostarray) {
  return (
    <LostCard
      key={lostarray.id}
      image={lostarray.image}
      item={lostarray.item}
      name={lostarray.name}
      email={lostarray.email}
      desc={lostarray.desc}
    />
  );
}
function createFoundEntry(foundarray) {
  return (
    <FoundCard
      key={foundarray.id}
      image={foundarray.image}
      item={foundarray.item}
      name={foundarray.name}
      email={foundarray.email}
      desc={foundarray.desc}
    />
  );
}

function LnF() {
  return (
    <div>
      <NavBar />
      {/* LOST SECTION */}
      <div className="flex flex-col justify-between gap-5 m-10">
        <div className="p-10">
          <div className="text-3xl p-4">Lost Section</div>
          <div className="flex overflow-x-auto space-x-8">
            {lostarray.map(createLostEntry)}
          </div>
        </div>

        {/* FOUND SECTION */}
        <div className="p-10">
          <div className="text-3xl p-4">Found Section</div>
          <div className="flex overflow-x-auto space-x-8">
            {foundarray.map(createFoundEntry)}
          </div>
        </div>
        <button>
          <Link
            to="/lost-found"
            className="bg-blue-950 p-5 text-white font-bold text-lg rounded-full"
          >
            Click here to report Lost or found
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default LnF;
