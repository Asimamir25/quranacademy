import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenu(false); // Close the menu after clicking
  };

  return (
    <div className="pr-16 shadow-xl flex items-center justify-between border-b-8 border-t-8 border-[#03853d]">
      <img src={Logo} alt="Logo" className="w-32 h-auto" />

      {/* Desktop Menu */}
      <ul className="gap-2 font-semibold hidden lg:flex cursor-pointer">
        <li
          className="p-4 hover:shadow-lg hover:text-[#03853d]"
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>
        <li
          className="p-4 hover:shadow-lg hover:text-[#03853d]"
          onClick={() => scrollToSection("about")}
        >
          About
        </li>
        <li
          className="p-4 hover:shadow-lg hover:text-[#03853d]"
          onClick={() => scrollToSection("team")}
        >
          Team
        </li>
        <li
          className="p-4 hover:shadow-lg hover:text-[#03853d]"
          onClick={() => scrollToSection("courses")}
        >
          Our Courses
        </li>
        <li
          className="p-4 hover:shadow-lg hover:text-[#03853d]"
          onClick={() => scrollToSection("fees")}
        >
          Fee Structure
        </li>
        <li
          className="p-4 hover:shadow-lg hover:text-[#03853d]"
          onClick={() => scrollToSection("contact")}
        >
          Contact Us
        </li>
      </ul>

      <button
        className="bg-[#03853d] px-8 py-4 rounded-full text-white font-bold hidden lg:block"
        onClick={() => scrollToSection("contact")}
      >
        Free Trial
      </button>

      {/* Mobile Menu Button */}
      <div className="lg:hidden" onClick={() => setMenu(!menu)}>
        {menu ? (
          <AiOutlineClose size={30} color="#03853d" />
        ) : (
          <AiOutlineMenu size={30} color="#03853d" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-[#03853d] shadow-lg transition-all duration-300 ${
          menu
            ? "max-h-screen opacity-100 z-50"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col w-full py-4 text-white text-center text-2xl">
          <li
            className="py-3 border-b border-gray-200"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="py-3 border-b border-gray-200"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="py-3 border-b border-gray-200"
            onClick={() => scrollToSection("team")}
          >
            Team
          </li>
          <li
            className="py-3 border-b border-gray-200"
            onClick={() => scrollToSection("courses")}
          >
            Our Courses
          </li>
          <li
            className="py-3 border-b border-gray-200"
            onClick={() => scrollToSection("fees")}
          >
            Fee Structure
          </li>
          <li
            className="py-3 border-b border-gray-200"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </li>
          <li className="py-4 px-4">
            <button
              className="bg-[#25262a] px-4 py-4 w-full rounded-full text-white font-bold"
              onClick={() => scrollToSection("contact")}
            >
              Free Trial
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
