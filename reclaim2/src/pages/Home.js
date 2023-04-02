import React from "react";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      {/* <div className="p-5 text-3xl bg-gray-900 text-white text-center font-2xl">
        Home Page
      </div> */}
      <img
        src="https://www.adani.com/-/media/Project/LucknowAirport/Traveller/AirportServices/LostAndFound/lost-and-found.png"
        className="w-full"
      ></img>
      <div className="p-10 text-3xl text-black text-center font-bold">
        Don't let a Mishap cost you a Lot!!
      </div>
      <div className="flex">
        <div className="m-10">
          <img src="https://media.istockphoto.com/id/1187582529/photo/staying-connected-in-this-digital-age.jpg?s=612x612&w=0&k=20&c=35CssnACCspByqwlYO6hgfQQoF3e5Fe_kHya10SQbAw=" />
        </div>

        <div className="w-1/2">
          <div className="p-10 text-3xl text-black text-center font-bold">
            Manage losts and Found easily
          </div>
          <p className="w-full text-lg">
            Firstly, it's important to establish a designated area for lost and
            found items. This could be a physical location, such as a box or
            shelf, or a digital location, such as a folder on your computer or a
            note-taking app. Secondly, labeling your items can make them easier
            to identify and return to their rightful owner. This can be done by
            attaching a name tag or labeling the item with a permanent marker.
            Thirdly, communication is key. If you've lost an item, it's
            important to notify anyone who may have come into contact with it.
            Lastly, being proactive can prevent the loss of items in the first
            place. This can include setting reminders to check for your
            belongings before leaving a location
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse">
        <div className="m-10">
          <img src="https://dynamic-cdn.eggdigital.com/bRSu3cBhv.jpg" />
        </div>

        <div className="w-1/2">
          <div className="p-10 text-3xl text-black text-center font-bold">
            Donate your stuff to the one who needs
          </div>
          <p className="w-full text-lg">
            Donating to those who are in need is an act of kindness that can
            have a significant impact on the lives of others. Whether it's a
            financial contribution, donating goods or volunteering your time,
            giving to those who are less fortunate can help to make a positive
            difference in the world. One of the most significant benefits of
            donating to those in need is that it can help to alleviate poverty
            and suffering. Those who are struggling to make ends meet may not
            have access to the basic necessities of life, such as food, shelter,
            or healthcare. Donations can help to provide these essentials and
            improve the quality of life for those who are struggling.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="m-10">
          <img src="https://fleamarketflipper.com/wp-content/uploads/2021/02/used-items.jpg" />
        </div>

        <div className="w-1/2">
          <div className="p-10 text-3xl text-black text-center font-bold">
            Sell Stuff you don't need anymore
          </div>
          <p className="w-full text-lg">
            If you're looking to declutter your home and make some extra cash,
            selling the stuff you don't need anymore can be a great option. Not
            only can it help you to clear out unwanted items, but it can also
            put some money back in your pocket. Here are some tips for
            successfully selling your unwanted items Sort through your
            belongings and decide what you want to sell. Consider items that are
            in good condition, but you no longer use or need. This could include
            clothing, furniture, electronics, books, or household items.
            Determine the value of your items. Research the current market value
            of similar items to get an idea of how much you can expect to sell
            your items for. You can use online marketplaces, such as eBay or
            Amazon, to get a sense of pricing.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-10 text-4xl text-black font-bold pl-64">
          Register Your Campus!!
        </div>
        <div className="flex justify-evenly">
          <div className="w-1/14 max-w-xs rounded-full">
            <img src="https://www.wetzelcountyschools.com/cms/lib/WV01000015/Centricity/Domain/957/Form-Button.png" />
            <p className="w-full text-lg text-black font-bold">
              Fill out the form!
            </p>
          </div>

          <div className="w-1/14 max-w-xs rounded-full">
            <img src="https://media.istockphoto.com/id/1190332135/vector/young-woman-working-on-laptop-computer-and-talking-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=X8N5bqdj1R3dyL2ftRhjaRpRE0dChhk0BzuDkx-8arU=" />
            <p className="w-full text-lg text-black font-bold">
              Our team will reach you out
            </p>
          </div>

          <div className="w-1/14 max-w-xs rounded-full">
            <img src="https://images.pond5.com/rocket-animation-rocket-launch-cartoon-footage-131435149_iconl.jpeg" />
            <p className="w-full text-lg text-black font-bold">Get started!</p>
          </div>
        </div>

        {/* <div className='flex space-around'>
       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
        </div> */}
        {/* <div className='bg-one h-48 w-full'>
            <p>ncend fc enr f</p>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
