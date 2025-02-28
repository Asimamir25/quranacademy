import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import Logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e5f3eb] border-t-8 border-[#03853d]">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="">
            <img
              src={Logo}
              alt="Islamic Quran Academy"
              className="w-40 h-auto   "
            />
            <p className="text-gray-600 font-medium mb-4">
              Islamic Quran Academy provides quality Quranic education with
              experienced teachers, flexible schedules, and personalized
              learning.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="bg-[#03853d] text-white p-2 rounded-full hover:bg-[#026d31] transition-colors"
              >
                <AiFillFacebook size={20} />
              </a>
              <a
                href="#"
                className="bg-[#03853d] text-white p-2 rounded-full hover:bg-[#026d31] transition-colors"
              >
                <AiFillInstagram size={20} />
              </a>
              <a
                href="#"
                className="bg-[#03853d] text-white p-2 rounded-full hover:bg-[#026d31] transition-colors"
              >
                <AiFillYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-6 text-[#03853d]">
              Quick Links
            </h3>
            <ul className="space-y-3 font-semibold">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  Our Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  Fee Structure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Courses */}
          <div className="mb-6 ">
            <h3 className="text-xl font-bold mb-6 text-[#03853d]">
              Our Courses
            </h3>
            <ul className="space-y-3 font-semibold">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  Quran Reading
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  Quran Memorization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#03853d] transition-colors"
                >
                  Tajweed Course
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-6 text-[#03853d]">
              Contact Us
            </h3>
            <ul className="space-y-4 font-semibold">
              <li className="flex items-start">
                <BiMap className="text-[#03853d] mr-3 mt-1" size={20} />
                <span className="text-gray-600">
                  Kabirwala, Multan, Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <AiFillPhone className="text-[#03853d] mr-3" size={20} />
                <span className="text-gray-600">+92-315-55-40525</span>
              </li>
              <li className="flex items-center">
                <AiFillMail className="text-[#03853d] mr-3" size={20} />
                <span className="text-gray-600">
                  islamicquranacademy@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#026d31] py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Islamic Quran Academy. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
