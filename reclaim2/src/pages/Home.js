import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <nav className=" bg-gray-900 flex justify-between gap-5 p-5 pl-10 pr-10 sticky top-0">
        <div className="flex-shrink-0 text-white text-4xl font-semibold">
          <Link to="/">
            <h1>Reclaim-R</h1>
          </Link>
        </div>
        <div className="gap-5">
          <button>
            <Link
              to="/signin"
              className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md text-lg p-2"
            >
              Login
            </Link>
          </button>
          <button>
            <Link
              to="/signup"
              className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md text-lg p-2"
            >
              Sign up
            </Link>
          </button>
        </div>
      </nav>
      {/* <div className="p-5 text-3xl bg-gray-900 text-white text-center font-2xl">
        Home Page
      </div> */}
      <div className="flex flex-row align-middle bg-[#FAF0ED] h-3/4">
        <img
          src="https://cdn.dribbble.com/userupload/5340198/file/original-7cc722a1eae79d28850dabb82c622819.jpg?compress=1&resize=1024x768"
          className="w-80% "
          alt="sro"
        />

        <div className="text-3xl font-medium my-auto text-center">
          LOST AND FOUND MADE EASY !!!!
          <p className="text-xl font-normal pt-5">
            Streamline lost and found with our all-in-one solution- ReclaimR
          </p>
          <div className="text-center p-10 pb-0">
            <button
              type="button"
              class="text-white bg-blue-700 p-5 pt-2 pb-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfDJ_7FOwPdvQn1VVcw7BJxbhsyo8hnyN_ov-BN_XScyvxmsw/viewform"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Register Your Campus
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="p-10 text-3xl text-black text-center font-bold">
        Don't let a Mishap cost you a Lot!!
      </div>
      <div className="p-20 pt-0 pb-0">
        <div className="flex align-baseline">
          <div className="m-10">
            <img
              src="https://media.istockphoto.com/id/1187582529/photo/staying-connected-in-this-digital-age.jpg?s=612x612&w=0&k=20&c=35CssnACCspByqwlYO6hgfQQoF3e5Fe_kHya10SQbAw="
              alt="sdfg"
            />
          </div>

          <div className="w-1/2">
            <div className="p-10 text-2xl text-black text-center font-bold">
              Manage losts and Found easily
            </div>
            <p className="w-full text-md">
              Firstly, it's important to establish a designated area for lost
              and found items. This could be a physical location, such as a box
              or shelf, or a digital location, such as a folder on your computer
              or a note-taking app. Secondly, labeling your items can make them
              easier to identify and return to their rightful owner. This can be
              done by attaching a name tag or labeling the item with a permanent
              marker. Thirdly, communication is key. If you've lost an item,
              it's important to notify anyone who may have come into contact
              with it. Lastly, being proactive can prevent the loss of items in
              the first place. This can include setting reminders to check for
              your belongings before leaving a location
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse">
          <div className="m-10">
            <img
              src="https://dynamic-cdn.eggdigital.com/bRSu3cBhv.jpg"
              alt="wert"
            />
          </div>

          <div className="w-1/2">
            <div className="pb-10 pt-10 text-2xl text-black text-center font-bold">
              Donate your stuff to the one who needs
            </div>
            <p className="w-full text-md">
              Donating to those who are in need is an act of kindness that can
              have a significant impact on the lives of others. Whether it's a
              financial contribution, donating goods or volunteering your time,
              giving to those who are less fortunate can help to make a positive
              difference in the world. One of the most significant benefits of
              donating to those in need is that it can help to alleviate poverty
              and suffering. Those who are struggling to make ends meet may not
              have access to the basic necessities of life, such as food,
              shelter, or healthcare. Donations can help to provide these
              essentials and improve the quality of life for those who are
              struggling.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="m-10">
            <img
              src="https://fleamarketflipper.com/wp-content/uploads/2021/02/used-items.jpg"
              alt="ghjk"
            />
          </div>

          <div className="w-1/2">
            <div className="pt-10 pb-10 text-2xl text-black text-center font-bold">
              Sell Stuff you don't need anymore
            </div>
            <p className="w-full text-md">
              If you're looking to declutter your home and make some extra cash,
              selling the stuff you don't need anymore can be a great option.
              Not only can it help you to clear out unwanted items, but it can
              also put some money back in your pocket. Here are some tips for
              successfully selling your unwanted items Sort through your
              belongings and decide what you want to sell. Consider items that
              are in good condition, but you no longer use or need.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center p-20">
        <div className="text-4xl text-black font-bold text-center p-10">
          Register Your Campus!!
        </div>
        <div className="flex justify-evenly">
          <div className="w-1/14 max-w-xs rounded-full">
            <img
              src="https://www.wetzelcountyschools.com/cms/lib/WV01000015/Centricity/Domain/957/Form-Button.png"
              alt="rtyui"
            />
            <p className="w-full text-lg text-black font-bold">
              Fill out the form!
            </p>
          </div>

          <div className="max-w-xs rounded-full">
            <img
              src="https://media.istockphoto.com/id/1190332135/vector/young-woman-working-on-laptop-computer-and-talking-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=X8N5bqdj1R3dyL2ftRhjaRpRE0dChhk0BzuDkx-8arU="
              alt="pioc"
            />
            <p className="w-full text-lg text-black font-bold">
              Our team will reach you out
            </p>
          </div>

          <div className="w-1/14 max-w-xs rounded-full">
            <img
              src="https://images.pond5.com/rocket-animation-rocket-launch-cartoon-footage-131435149_iconl.jpeg"
              alt="okjn"
            />
            <p className="w-full text-lg text-black font-bold">Get started!</p>
          </div>
        </div>

        {/* <div className='bg-one h-48 w-full'>
            <p>ncend fc enr f</p>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
