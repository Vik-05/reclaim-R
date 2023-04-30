import React from 'react'
import NavBar from '../components/NavBar';
import lostarray from '../arrays/lostarray';
import foundarray from '../arrays/foundarray';
import LostCard from '../components/LostCard';
import FoundCard from '../components/FoundCard';
import Footer from '../components/Footer';

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

function LnF() {
  return (
   <div>
        <NavBar />
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
    <Footer />
    </div>
  )
}

export default LnF;