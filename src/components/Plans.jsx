import React from "react";

const Plans = () => {
  const planData = [
    {
      title: "Weekend Plan",
      price: "$35/Month",
      features: [
        "Online classes",
        "30 minutes class",
        "2 classes per week",
        "One to one sessions",
        "2 days FREE trial",
        "Female tutors",
        "Flexible timing",
      ],
    },
    {
      title: "Regular Plan",
      price: "$50/Month",
      featured: true,
      features: [
        "Online classes",
        "30 minutes class",
        "4 classes per week",
        "One to one sessions",
        "7 days FREE trial",
        "Female tutors",
        "Flexible timing",
        "Learning materials included",
      ],
    },
    {
      title: "Premium Plan",
      price: "$80/Month",
      features: [
        "Online classes",
        "45 minutes class",
        "Daily classes",
        "One to one sessions",
        "14 days FREE trial",
        "Female tutors",
        "Flexible timing",
        "Premium learning resources",
      ],
    },
  ];
  const UsaData = [
    {
      title: "Weekend Plan",
      price: "$25/Month",
      features: [
        "Online classes",
        "30 minutes class",
        "2 classes per week",
        "One to one sessions",
        "2 days FREE trial",
        "Female tutors",
        "Flexible timing",
      ],
    },
    {
      title: "Regular Plan",
      price: "$45/Month",
      featured: true,
      features: [
        "Online classes",
        "30 minutes class",
        "4 classes per week",
        "One to one sessions",
        "7 days FREE trial",
        "Female tutors",
        "Flexible timing",
        "Learning materials included",
      ],
    },
    {
      title: "Premium Plan",
      price: "$75/Month",
      features: [
        "Online classes",
        "45 minutes class",
        "Daily classes",
        "One to one sessions",
        "14 days FREE trial",
        "Female tutors",
        "Flexible timing",
        "Premium learning resources",
      ],
    },
  ];

  return (
    <div className="flex flex-col py-16 justify-center bg-gray-50" id="fees">
      <div className="flex flex-col items-center mb-16">
        <h1 className=" text-3xl md:text-6xl font-bold text-[#03853d] mb-4">
          Pricing & Plans
        </h1>
        <div className="w-24 h-1 bg-[#03853d] rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl text-center">
          Choose the perfect plan that fits your learning needs and schedule
        </p>
      </div>
      <h1 className=" text-3xl md:text-6xl font-bold text-[#03853d] text-center my-8 px-5  md:px-14">
        Fee for UK Students
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {planData.map((plan, index) => (
          <div
            key={index}
            className={`card relative flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl 
                      w-full md:w-[30%] transition-all duration-300 transform hover:-translate-y-2
                      ${plan.featured ? "border-2 border-[#03853d]" : ""}`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#03853d] text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
            )}

            <div className="bg-[#03853d] w-full rounded-t-lg p-6 text-center">
              <h2 className="text-center font-bold text-white text-xl">
                {plan.title}
              </h2>
            </div>

            <div className="p-3 flex justify-center">
              <div
                className={`w-48 h-48 rounded-full flex flex-col justify-center items-center 
                            border-[#03853d] border-2 transition-shadow duration-300 
                            hover:shadow-lg ${
                              plan.featured ? "bg-[#f0f9f4]" : ""
                            }`}
              >
                <h3 className="font-bold text-3xl">{plan.price}</h3>
                <p className="text-gray-600 mt-2">per month</p>
              </div>
            </div>

            <ul className="w-full text-center font-medium  px-6 ">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="py-2 border-b border-gray-200 last:border-b-0"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto mb-6 px-6 flex justify-center">
              <button
                className={`w-full py-3 rounded-full font-bold transition-colors duration-300
                              ${
                                plan.featured
                                  ? "bg-[#03853d] text-white hover:bg-[#026b30]"
                                  : "bg-white text-[#03853d] border-2 border-[#03853d] hover:bg-[#f0f9f4]"
                              }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl text-center md:text-6xl font-bold text-[#03853d] my-8 px-5 md:px-14">
        Fee for USA Students
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {UsaData.map((plan, index) => (
          <div
            key={index}
            className={`card relative flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl 
                      w-full md:w-[30%] transition-all duration-300 transform hover:-translate-y-2
                      ${plan.featured ? "border-2 border-[#03853d]" : ""}`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#03853d] text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
            )}

            <div className="bg-[#03853d] w-full rounded-t-lg p-6 text-center">
              <h2 className="text-center font-bold text-white text-xl">
                {plan.title}
              </h2>
            </div>

            <div className="p-6 flex justify-center">
              <div
                className={`w-48 h-48 rounded-full flex flex-col justify-center items-center 
                            border-[#03853d] border-2 transition-shadow duration-300 
                            hover:shadow-lg ${
                              plan.featured ? "bg-[#f0f9f4]" : ""
                            }`}
              >
                <h3 className="font-bold text-3xl">{plan.price}</h3>
                <p className="text-gray-600 mt-2">per month</p>
              </div>
            </div>

            <ul className="w-full text-center font-medium  px-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="py-2 border-b border-gray-200 last:border-b-0"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto mb-6 px-6 flex justify-center">
              <button
                className={`w-full py-3 rounded-full font-bold transition-colors duration-300
                              ${
                                plan.featured
                                  ? "bg-[#03853d] text-white hover:bg-[#026b30]"
                                  : "bg-white text-[#03853d] border-2 border-[#03853d] hover:bg-[#f0f9f4]"
                              }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
