import React from "react";
// import videoBg from "../assets/video.mp4"; // Make sure to import your video file
import Video from "../assets/quran.mp4";
const Course = () => {
  return (
    <div className="relative   h-[100%]" id="courses">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full  object-cover"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full  bg-[#28292d] opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col py-10  items-center h-full px-6">
        <h1 className="text-5xl font-bold text-[#03853d] mb-4">Our Courses</h1>
        <div className="w-24 h-1 bg-[#03853d] rounded-full mb-6"></div>
        <p className="text-lg text-center max-w-3xl">
          We believe in delivering the best services with a commitment to
          quality and excellence. We believe in delivering the best services
          with a commitment to quality and excellence. We believe in delivering
        </p>

        <div className="flex flex-col md:flex-row   bg-[#2d2e32] px-4 my-5  py-6 rounded-lg items-start gap-7 ">
          <div className="w-full md:w-1/2 space-y-4 flex  flex-col justify-between gap-16">
            <h1 className="text-2xl  font-extrabold text-white leading-relaxed">
              Learn Basic Noorani Qaida Online
            </h1>
            <p className="text-2xl font-base text-white">
              Are you eager to Learn Noorani Qaida Online with proficiency and
              precision? At Pak Quran Academy, we take immense pride in offering
              top-notch online Noorani Qaida courses tailored in the USA.
              Whether you’re a beginner, a parent seeking Quranic education for
              your child, or an adult yearning to enhance your Quranic reading
              skills, our platform is here to cater to your unique needs. We
              provide an interactive learning environment to our students. Our
              live one-on-one online sessions foster an interactive learning
              environment, where students can directly engage with their
              teachers, ask questions, and receive real-time feedback, enhancing
              the learning process.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {[
                "Expert Instructors",
                "Comprehensive Curriculum",
                "Interactive Learning",
                "Quran Memorization",
                "Flexible Scheduling",
                "Customized Learning Journey",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#03853d] rounded-full mr-2"></span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#03853d] px-24 py-4  rounded-full text-white font-bold hidden lg:block ">
              Free Trial
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#03853d]/20 rounded-lg transform translate-x-2 translate-y-2"></div>
              <img
                src="https://thequranclasses.online/wp-content/uploads/2021/05/2.jpg"
                alt="Quran Study"
                className="rounded-lg shadow-lg relative z-10 w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row   bg-[#2d2e32] px-4 my-5  py-6 rounded-lg items-center gap-8 ">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#03853d]/20 rounded-lg transform translate-x-2 translate-y-2"></div>
              <img
                src="https://plus.unsplash.com/premium_photo-1677013624162-db18bf12f2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHF1cmFufGVufDB8fDB8fHww"
                alt="Quran Study"
                className="rounded-lg shadow-lg relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl font-extrabold text-white leading-relaxed">
              Learn to Recite Quran Online
            </h1>
            <p className="text-2xl font-base text-white">
              Are you eager to Learn Noorani Qaida Online with proficiency and
              precision? At Pak Quran Academy, we take immense pride in offering
              top-notch online Noorani Qaida courses tailored in the USA.
              Whether you’re a beginner, a parent seeking Quranic education for
              your child, or an adult yearning to enhance your Quranic reading
              skills, our platform is here to cater to your unique needs. We
              provide an interactive learning environment to our students. Our
              live one-on-one online sessions foster an interactive learning
              environment, where students can directly engage with their
              teachers, ask questions, and receive real-time feedback, enhancing
              the learning process.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {[
                "Expert Instructors",
                "Comprehensive Curriculum",
                "Interactive Learning",
                "Quran Memorization",
                "Flexible Scheduling",
                "Customized Learning Journey",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#03853d] rounded-full mr-2"></span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#03853d] px-24 py-4  rounded-full text-white font-bold hidden lg:block ">
              Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
