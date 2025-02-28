import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="w-full h-[100vh]">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-full"
      >
        <SwiperSlide className="h-full relative">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1624863037347-ec8473a65c89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 ">
            <h1 className="text-xl font-extrabold md:mb-8  leading-snug">
              Welcome to Your Path of Quranic Enlightenment
            </h1>
            <p className="text-xl max-w-3xl font-light">
              Master the recitation, understand the meaning, and implement the
              teachings of the Holy Quran in your daily life. Start learning
              today!
            </p>
            <button className="bg-[#03853d] mt-10 p-4 rounded-full text-white">
              Regeistered Now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-full relative">
          <img
            src="https://images.unsplash.com/photo-1624862760439-4056a5111511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <h1 className="text-xl font-extrabold md:mb-8  leading-normal">
              Master the Recitation and Understanding of the Holy Quran Today
            </h1>
            <p className="text-xl max-w-3xl font-light">
              Master the recitation, understand the meaning, and implement the
              teachings of the Holy Quran in your daily life. Start learning
              today!
            </p>
            <button className="bg-[#03853d] mt-10 p-4 rounded-full text-white">
              Regeistered Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://images.unsplash.com/photo-1624863035482-b005dbba3b6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <h1 className="text-xl font-extrabold md:mb-8  leading-normal">
              Strengthen Your Faith with Quranic Knowledge
            </h1>
            <p className="text-xl max-w-3xl font-light">
              Master the recitation, understand the meaning, and implement the
              teachings of the Holy Quran in your daily life. Start learning
              today!
            </p>
            <button className="bg-[#03853d] mt-10 p-4 rounded-full text-white">
              Regeistered Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: white !important; /* Default bullet color */
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background-color: #03853d !important; /* Active bullet color */
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
