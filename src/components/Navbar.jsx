import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  AiFillClockCircle,
  AiFillCloseCircle,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" pr-16 shadow-xl flex items-center justify-between border-b-8 border-t-8 border-[#03853d] ">
      <img src={Logo} alt="" className="w-32 h-auto" />

      <ul className=" gap-2   font-semibold hidden lg:flex">
        <li className=" p-4 hover:shadow-lg  hover:text-[#03853d]">Home</li>
        <li className=" p-4 hover:shadow-lg  hover:text-[#03853d]">About</li>
        <li className=" p-4 hover:shadow-lg  hover:text-[#03853d]">
          What we do
        </li>
        <li className=" p-4 hover:shadow-lg  hover:text-[#03853d]">
          Our Courses
        </li>
        <li className=" p-4 hover:shadow-lg hover:text-[#03853d] ">
          Fee Structure
        </li>
        <li className=" p-4 hover:shadow-lg hover:text-[#03853d] ">
          Contact Us
        </li>
      </ul>
      <button className="bg-[#03853d] px-8 py-4  rounded-full text-white font-bold hidden lg:block ">
        Free Trial
      </button>
      <div className="lg:block " onClick={() => setMenu(!menu)}>
        {menu ? (
          <AiOutlineClose size={30} color="#03853d" className="lg:hidden" />
        ) : (
          <AiOutlineMenu size={30} color="#03853d" className="lg:hidden" />
        )}
        <div
          className={`absolute top-44 lg:hidden left-0 w-full bg-[#03853d] shadow-lg transition-all duration-300 ${
            menu
              ? "max-h-screen opacity-100 overflow-y-auto z-50"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col w-full py-4 text-white text-center text-3xl">
            <li className="border-b border-gray-200 py-2 px-4">Home</li>
            <li className="border-b border-gray-200 py-2 px-4">About</li>{" "}
            <li className="border-b border-gray-200 py-2 px-4"> What we do</li>{" "}
            <li className="border-b border-gray-200 py-2 px-4"> Our Courses</li>
            <li className="border-b border-gray-200 py-2 px-4">
              {" "}
              Fee Structure{" "}
            </li>
            <li className="border-b border-gray-200 py-2 px-4"> Contact Us</li>
            <li className="py-4 px-4">
              <button className="bg-[#25262a] px-4 py-4 w-full rounded-full text-white font-bold">
                Register Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
