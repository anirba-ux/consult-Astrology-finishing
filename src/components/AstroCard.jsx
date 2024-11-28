import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import AstrologersData from "../components/AstrologersData";

const AstroCard = () => {
  // Star rendering logic
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return stars;
  };

  const handleChat = (chatLink) => {
    window.open(chatLink, "_blank");
  };

  const handleGoogleCall = (phone) => {
    if (window.confirm(`Do you want to call ${phone}?`)) {
      window.open(`tel:${phone}`, "_self");
    }
  };

  return (
    <div className="bg-gray-50 py-8 px-4 md:px-6 lg:px-16">
      {/* Header Section */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-2xl font-bold">Our Experts</h1>
      </div>

      {/* AstrologersCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AstrologersData.map((astrologer, index) => (
          <div
            key={index}
            className="bg-pink-200 border rounded-lg shadow-md p-4 hover:bg-pink-300 transition duration-300 ease-in-out"
          >
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full overflow-hidden">
              <img
                src={astrologer.avatar}
                alt={`${astrologer.name} Avatar`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-center text-sm font-bold mt-4">
              {astrologer.name}
            </h3>

            {/* Ratings */}
            <div className="flex justify-center items-center text-yellow-500 mt-2">
              {renderStars(astrologer.rating)}
            </div>

            {/* Details */}
            <p className="text-gray-600 text-xs text-center mt-1">
              {astrologer.expertise}
            </p>
            <p className="text-gray-600 text-xs text-center mt-1">
              {astrologer.languages}
            </p>
            <p className="text-gray-500 text-xs text-center mt-1">
              Exp: {astrologer.experience} Years
            </p>
            <p className="text-black font-semibold text-center mt-2">
              ₹ {astrologer.rate}/min
            </p>

            {/* Buttons */}
            <div className="mt-4 flex justify-center space-x-2">
              <button
                onClick={() => handleChat(astrologer.chatLink)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 text-xs rounded"
              >
                Chat
              </button>
              <button
                onClick={() => handleGoogleCall(astrologer.phone)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 text-xs rounded"
              >
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstroCard;
