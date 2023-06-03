import { useState } from "react";

import logo from "./logo (2).png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <div className="">
    <div>
      <div>
      <h2 className=" bg-gray-600 text-white font-serif py-4 text-center">for any Enquiry or Complaints- WhatsApp Us-6006321262 </h2>
      </div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-50 p-4  shadow-lg ">
        <div className="flex items-center justify-between">
          <img  className={`text-xl font-serif      rounded-lg  w-44 ${window.innerWidth > 768 ? "justify-end flex-shrink" : "text-center"}`} src= {logo} alt="logo" />
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-gray-200"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title className="text-black" >Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              />
            </svg>
          </button>
        </div>
        
        <div
          className={`${ 
            menuOpen ? "block" : "hidden"
          } md:block md:flex-grow md:items-center text-black`}
        >
          <ul className={`flex flex-col md:flex-row text-black font-serif text-xl  ${window.innerWidth > 768 ? "justify-end" : "justify-center"}`}>
            <li className="mb-2 md:mb-0 md:mr-6 p-2 font-bold text-gray-500 bg-gray-50 rounded-full hover:before:selection:">Home</li>
            <li className="mb-2 md:mb-0 md:mr-6 p-2 font-bold text-gray-500 bg-gray-50 rounded-full">  Contact Us </li>
            <li className="mb-2 md:mb-0 md:mr-6 p-2 font-bold text-gray-500 bg-gray-50 rounded-full">About Us</li>
            <li className="mb-2 md:mb-0 p-2 font-bold text-gray-500 bg-gray-50 rounded-full">Services  </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Header;