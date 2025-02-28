import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

const Infobar = () => {
  return (
    <div className="px-16 bg-[#25262a] flex justify-center md:justify-between text-white p-4">
      <div className="hidden md:flex gap-7">
        <div className="flex justify-center items-center gap-3">
          <AiFillMail color="#03853d" size={24} />
          <h1>islamicquran@gmail.com</h1>
        </div>
        <div className="flex justify-center items-center gap-3">
          <AiFillPhone color="#03853d" size={24} />
          <h1>+92155540525</h1>
        </div>
      </div>
      <div className="flex gap-8 items-center justify-center">
        <BsFacebook color="#1877F2" size={24} /> {/* Facebook Blue */}
        <BsInstagram color="#C13584" size={24} /> {/* Instagram Pinkish */}
        <BsTwitter color="#1DA1F2" size={24} /> {/* Twitter Blue */}
      </div>
    </div>
  );
};

export default Infobar;
