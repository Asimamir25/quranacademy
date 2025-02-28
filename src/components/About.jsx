import React from "react";

const About = () => {
  return (
    <div className=" my-16 px-4" id="about">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#03853d] mb-4">About Us</h1>
        <div className="w-24 h-1 bg-[#03853d] mx-auto rounded-full"></div>
      </div>

      {/* First section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-lg font-semibold text-[#25262a] leading-relaxed">
            Islamic Quran Academy is an esteemed online Quran institution
            dedicated to delivering comprehensive Islamic education to Muslim
            students worldwide. Our commitment as a leading online Quran academy
            is reflected in our provision of superior-quality Quranic teaching
            to each student.
          </p>
          <p className="text-lg font-medium text-[#25262a]">
            Our instructional approach encompasses the following key components:
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {[
              "Quranic Reading Techniques",
              "Tajweed Mastery",
              "Word-by-Word Quranic Study",
              "Quran Memorization",
              "Islamic Supplications",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="inline-block w-2 h-2 bg-[#03853d] rounded-full mr-2"></span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg  bg-[#03853d]/20 transform translate-x-2 translate-y-2"></div>
            <img
              src="https://images.pexels.com/photos/19084834/pexels-photo-19084834/free-photo-of-hand-on-koran.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Quran Study"
              className="rounded-lg shadow-lg relative z-10 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-[#03853d]/20 rounded-lg transform translate-x-2 translate-y-2"></div>
            <img
              src="https://images.pexels.com/photos/5192346/pexels-photo-5192346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Islamic Education"
              className="rounded-lg shadow-lg relative z-10 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-sm">
          <p className="text-lg font-semibold text-[#25262a] leading-relaxed">
            Renowned for our commitment to excellence, we boast a team of
            certified instructors and scholars who ensure the highest standard
            of education delivery. Our classes cater to students of all ages,
            fostering a learning environment accessible to all.
          </p>
          <p className="text-lg font-semibold text-[#25262a] leading-relaxed mt-4">
            With the blessings of Almighty Allah Subhan Wa Ta'ala, our services
            have reached and benefited students globally, providing them the
            invaluable opportunity to learn the Quran online. The satisfaction
            of hundreds of students worldwide evidences our track record of
            success and credibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
