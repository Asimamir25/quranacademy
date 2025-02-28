import React from "react";
import Asim from "../assets/asim.jpg";

const teamMembers = [
  {
    name: "Asim Amir",
    position: "Founder",
    image: Asim,
    services: ["Tajweed Quran", "Islamic Studies", "Quran Translation"],
    experience: "11 Years of Experience in Tajweed Quran",
  },
  {
    name: "Ahmed Ali",
    position: "Co-Founder",
    image:
      "https://imamsonline.com/wp-content/uploads/2021/03/ndor-qari-muhammad-asim-mbe-copy.jpg",
    services: ["Software Development", "Project Management"],
    experience: "8 Years of Experience in Software Development",
  },
  {
    name: "Sarah Khan",
    position: "Instructor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7aYhH0g-DBdG4Tm_us2NE2uKx2Bt1tS_-Q&s",
    services: ["Quran Recitation", "Memorization Techniques"],
    experience: "6 Years of Experience in Quran Teaching",
  },
  {
    name: "Ahmed Ali",
    position: "Co-Founder",
    image: Asim,
    services: ["Software Development", "Project Management"],
    experience: "8 Years of Experience in Software Development",
  },
  {
    name: "Sarah Khan",
    position: "Instructor",
    image:
      "data:image/jpeg;base64,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",
    services: ["Quran Recitation", "Memorization Techniques"],
    experience: "6 Years of Experience in Quran Teaching",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center py-6" id="team">
      <h1 className=" text-3xl text-center md:text-6xl font-bold text-[#03853d] mb-4">
        Meet Our Team
      </h1>
      <div className="w-24 h-1 bg-[#03853d] rounded-full mb-6"></div>

      <div className="flex flex-wrap w-full gap-4 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg   transform translate-x-2 translate-y-2 md:w-[32%] p-6 my-3 relative group overflow-hidden"
          >
            <div className="absolute inset-0 rounded-lg  bg-[#03853d]/20 transform translate-x-2 translate-y-2"></div>
            {/* Image that expands on hover */}

            <img
              src={member.image}
              alt={member.name}
              className="absolute top-0 right-4 rounded-md w-20 h-20 object-cover z-10 
                      group-hover:w-full group-hover:h-full group-hover:z-20 group-hover:right-0
                      transition-all duration-300 ease-in-out"
            />

            {/* Card content */}
            <div className="relative z-20 group-hover:z-10">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="font-bold text-[#03853d]">{member.name}</h1>
                  <p className="font-semibold">{member.position}</p>
                </div>
                <div className="w-16 h-16"></div> {/* Spacer for image */}
              </div>

              <p className="font-medium">{member.experience}</p>

              {/* Services */}
              <h2 className="font-bold text-[#03853d] mt-2">Services:</h2>
              <ul className="list-disc list-inside">
                {member.services.map((service, i) => (
                  <li key={i} className="text-gray-700">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
