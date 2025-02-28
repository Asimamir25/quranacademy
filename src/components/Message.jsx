import React from "react";
// import videoBg from "../assets/video.mp4"; // Make sure to import your video file
import Video from "../assets/quran.mp4";
const Message = () => {
  return (
    <div className="relative   h-[100%]">
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
      <div className="absolute top-0 left-0 w-full  bg-[#28292d] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col py-10  items-center h-full px-6">
        <h1 className="text-3xl md:text-6xl text-center font-bold text-[#03853d] mb-4">
          Message From Us
        </h1>
        <div className="w-24 h-1 bg-[#03853d] rounded-full mb-6"></div>
        <p className="text-lg text-center max-w-3xl">
          We believe in delivering the best services with a commitment to
          quality and excellence. We believe in delivering the best services
          with a commitment to quality and excellence. We believe in delivering
        </p>
        <div className="p-6 opacity-80  bg-[#2d2e32] rounded-lg text-white my-5">
          Assalamu Alaikum!
          <br /> I trust this message finds you in good health and high spirits.
          I’m a proficient online Quran instructor dedicated to imparting the
          teachings of the Holy Quran with Tajweed. If you or your loved ones
          seek guidance in Quranic studies, I am pleased to announce ongoing
          admissions for online Quran classes. My name is Qari Mahmood Hassan,
          son of Qari Ahmad Hassan.
          <br /> <br /> I’m grateful to have received early education in Tajweed
          and Quranic recitation from esteemed mentors, including my father,
          Qari Ehtisham-ul-Haq, and Qari Arif. Subsequently, I pursued an M.A.
          in Islamiat under scholars such as Sadrul Mudarriseen Hazrat Maulana
          Ameer Mohammad Tunswi, Rahmatullah Alaihi, Shaykh Hadith Hazrat
          Maulana Khalil-ur-Rahman Dahir Sahib, Damat Barakatuhum, and Hadith
          Hazrat Maulana Mufti Mohammad Tahir Sahib, among others.
          <br />
          <br />
          For the past decade, I’ve been devoted to teaching the Holy Quran with
          Tajweed and have spent five years specifically dedicated to online
          instruction.
          <br /> My curriculum encompasses Tajweed-i-Qaida, Nazrah, Quranic
          recitation, memorization, essential Islamic teachings, and prayer
          rituals tailored for children and adults alike.
        </div>
        <div className="  p-6  opacity-80 bg-[#2d2e32] rounded-lg text-white ">
          Assalamu Alaikum!
          <br /> I trust this message finds you in good health and high spirits.
          I’m a proficient online Quran instructor dedicated to imparting the
          teachings of the Holy Quran with Tajweed. If you or your loved ones
          seek guidance in Quranic studies, I am pleased to announce ongoing
          admissions for online Quran classes. My name is HafiZ Umar Rasheed,
          son of Raseeh Ahmad.
          <br /> <br /> I’m grateful to have received early education in Tajweed
          and Quranic recitation from esteemed mentors, including my father,
          Qari Rasheed, and Qari Arif. Subsequently,
          <br />
          <br />
          For the past decade, I’ve been devoted to teaching the Holy Quran with
          Tajweed and have spent Eleven years specifically dedicated to online
          instruction.
          <br /> My curriculum encompasses Tajweed-i-Qaida, Nazrah, Quranic
          recitation, memorization, essential Islamic teachings, and prayer
          rituals tailored for children and adults alike.
        </div>
      </div>
    </div>
  );
};

export default Message;
