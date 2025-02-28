import React from "react";
import Infobar from "./components/Infobar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Message from "./components/Message";
import Course from "./components/Course";
import Team from "./components/Team";
import Plans from "./components/Plans";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Infobar />
      <Navbar />
      <Hero />
      <About />
      <Message />
      <Team />
      <Course />
      <Plans />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
