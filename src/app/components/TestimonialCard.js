import React from "react";

const TestimonialCard = ({ description, name, designation }) => {
  return (
    <div className="m-7 h-full bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-xl p-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-8 h-8 text-indigo-500 mb-4"
        viewBox="0 0 975.036 975.036"
      >
        <path d="M925.036 57.197h-304c..." />
      </svg>
      <p className="leading-relaxed text-gray-700 italic mb-6">“{description}”</p>
      <div className="flex items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 font-semibold text-md">{name}</h2>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
