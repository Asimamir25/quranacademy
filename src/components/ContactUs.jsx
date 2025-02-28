import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  AiFillMail,
  AiFillPhone,
  AiOutlineUser,
  AiOutlineGlobal,
  AiOutlineMessage,
  AiFillBook,
  AiTwotoneBook,
} from "react-icons/ai";
import { BiMap, BiChevronDown } from "react-icons/bi";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+92", // Default to Pakistan
    mobile: "",
    email: "",
    confirmEmail: "",
    country: "",
    message: "",
    courses: "",
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Country data with codes and flags
  const countryCodes = [
    { code: "+1", country: "United States", flag: "us" },
    { code: "+44", country: "United Kingdom", flag: "gb" },
    { code: "+91", country: "India", flag: "in" },
    { code: "+92", country: "Pakistan", flag: "pk" },
    { code: "+971", country: "United Arab Emirates", flag: "ae" },
    { code: "+966", country: "Saudi Arabia", flag: "sa" },
    { code: "+60", country: "Malaysia", flag: "my" },
    { code: "+49", country: "Germany", flag: "de" },
    { code: "+33", country: "France", flag: "fr" },
    { code: "+61", country: "Australia", flag: "au" },
    { code: "+86", country: "China", flag: "cn" },
    { code: "+65", country: "Singapore", flag: "sg" },
    { code: "+90", country: "Turkey", flag: "tr" },
    { code: "+20", country: "Egypt", flag: "eg" },
    { code: "+234", country: "Nigeria", flag: "ng" },
    { code: "+27", country: "South Africa", flag: "za" },
    { code: "+55", country: "Brazil", flag: "br" },
    { code: "+7", country: "Russia", flag: "ru" },
    { code: "+81", country: "Japan", flag: "jp" },
    { code: "+82", country: "South Korea", flag: "kr" },
  ];

  // Full list of countries for country dropdown
  const courses = ["Read Online", "Read Tajweed"];
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    // Rest of countries omitted for brevity
    "Pakistan",
    "United States of America",
    "United Kingdom",
    "India",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
  };

  const selectCountryCode = (code) => {
    setFormData({ ...formData, countryCode: code });
    setShowCountryDropdown(false);
  };
  const selectCourse = (code) => {
    setFormData({ ...formData, courses: code });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm("service_r7nfbs7", "template_z8c75pe", form.current, {
        publicKey: "4dyMchG6-xNr4KOcN",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonColor: "#03853d",
          });
          setFormData({
            fullName: "",
            countryCode: "+92",
            mobile: "",
            email: "",
            confirmEmail: "",
            country: "",
            message: "",
            courses: "",
          });
        },
        (error) => {
          // console.log("FAILED...", error.text);
          // Show error alert
          Swal.fire({
            title: "Error!",
            text: "Failed to send your message. Please try again later.",
            icon: "error",
            confirmButtonColor: "#d33",
          }).finally(() => {
            setIsSubmitting(false); // Re-enable button
          });
        }
      );
    // Handle form submission
    console.log({
      ...formData,
      mobile: `${formData.countryCode} ${formData.mobile}`,
    });
    // Reset form or show success message
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12" id="contact">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#03853d] mb-4">Contact Us</h1>
        <div className="w-24 h-1 bg-[#03853d] mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get in touch with Islamic Quran Academy for inquiries or quick
          admission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Contact Information */}
        <div className="bg-[#03853d]/10 p-8">
          <h2 className="text-3xl font-bold text-[#03853d] mb-6">
            Contact Information
          </h2>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#03853d] p-3 rounded-full">
                <BiMap size={24} color="white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-700">Kabirwala, Multan</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#03853d] p-3 rounded-full">
                <AiFillMail size={24} color="white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-700">islamicquranacademy@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#03853d] p-3 rounded-full">
                <AiFillPhone size={24} color="white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-700">+92 XXX XXXXXXX</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43385.35581967394!2d71.82710961421357!3d30.404712771123473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3925c425eac1e4a7%3A0xa1740413b0c973d7!2sKabirwala%2C%20Khanewal%20District%2C%20Punjab!5e0!3m2!1sen!2s!4v1709123456789"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Quick Admission Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#03853d] mb-6">
            Quick Admission Form
          </h2>

          <form onSubmit={handleSubmit} ref={form} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                <span className="text-red-500">*</span> Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03853d] focus:border-[#03853d]"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Country Code and Mobile Phone Field */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                <span className="text-red-500">*</span> Mobile
              </label>
              <div className="flex">
                <div className="relative">
                  <div
                    className="flex items-center border border-gray-300 p-3 rounded-l-lg cursor-pointer hover:bg-gray-50"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  >
                    <img
                      src={`https://flagcdn.com/24x18/${
                        countryCodes.find(
                          (c) => c.code === formData.countryCode
                        )?.flag || "pk"
                      }.png`}
                      alt="Country flag"
                      className="w-6 h-4 mr-2"
                    />
                    <span>{formData.countryCode}</span>
                    <BiChevronDown className="ml-1" />
                  </div>

                  {showCountryDropdown && (
                    <div className="absolute z-10 top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto w-64">
                      {countryCodes.map((country) => (
                        <div
                          key={country.code}
                          className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                          onClick={() => selectCountryCode(country.code)}
                        >
                          <img
                            src={`https://flagcdn.com/24x18/${country.flag}.png`}
                            alt={`${country.country} flag`}
                            className="w-6 h-4 mr-2"
                          />
                          <span className="font-medium">{country.country}</span>
                          <span className="ml-auto text-gray-600">
                            {country.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="flex-1 p-3 border border-gray-300 border-l-0 rounded-r-lg focus:ring-2 focus:ring-[#03853d] focus:border-[#03853d]"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  <span className="text-red-500">*</span> Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiFillMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03853d] focus:border-[#03853d]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Confirm Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiFillMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03853d] focus:border-[#03853d]"
                    placeholder="Confirm your email"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                <span className="text-red-500">*</span> Country
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineGlobal className="text-gray-400" />
                </div>
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03853d] focus:border-[#03853d]"
                >
                  <option value="">Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                <span className="text-red-500">*</span> Select Course
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiTwotoneBook className="text-gray-400" />
                </div>
                <select
                  name="courses"
                  required
                  value={formData.courses}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03853d] focus:border-[#03853d]"
                >
                  <option value="">Select Courses</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                <span className="text-red-500">*</span> Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <AiOutlineMessage className="text-gray-400" />
                </div>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03853d] focus:border-[#03853d]"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>

            <div className="mt-6">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-[#026b30] text-white py-3 px-6 rounded-full hover:bg-[#026d31] transition duration-300 font-medium"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
