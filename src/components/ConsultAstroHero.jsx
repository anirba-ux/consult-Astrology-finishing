import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AstrologersData from "../components/AstrologersData";

const ConsultAstroHero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);

  // Get filtered and sorted astrologers based on the current query and sort option
  const getFilteredAndSortedAstrologers = () => {
    let result = AstrologersData.filter((astrologer) =>
      astrologer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "experience") {
      result.sort((a, b) => b.experience - a.experience);
    } else if (sortOption === "rate") {
      result.sort((a, b) => a.rate - b.rate);
    }

    return result;
  };

  const filteredAndSortedAstrologers = getFilteredAndSortedAstrologers();

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedAstrologer(null);
  };

  return (
    <div className="bg-white py-6 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          CONSULT ASTROLOGER
        </h1>
      </div>

      {/* Chat Button & Search Bar */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        {/* Chat Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md text-2xl">
          Chat/Talk to our Experts
        </button>

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">Sort</option>
          <option value="name">Sort by Name</option>
          <option value="experience">Sort by Experience</option>
          <option value="rate">Sort by Rate</option>
        </select>

        {/* Search Bar */}
        <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center h-10 px-4">
            <FaSearch className="text-black h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Astrologers List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {filteredAndSortedAstrologers.map((astrologer, index) => (
          <div
            key={index}
            className="bg-gray-100 border grid grid-cols-2 rounded-lg shadow-md p-4 cursor-pointer"
            onClick={() => setSelectedAstrologer(astrologer)}
          >
            <img
              src={astrologer.avatar}
              alt={astrologer.name}
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />
            <h3 className="text-center text-lg font-bold mt-7">
              {astrologer.name}
            </h3>
            <p className="text-center text-gray-600">{astrologer.expertise}</p>
            <p className="text-center text-gray-500">
              Exp: {astrologer.experience} Years
            </p>
            <p className="text-center text-black font-semibold">
              ₹{astrologer.rate}/min
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAstrologer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <img
              src={selectedAstrologer.avatar}
              alt={selectedAstrologer.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 className="text-center text-2xl font-bold mt-4">
              {selectedAstrologer.name}
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Expertise: {selectedAstrologer.expertise}
            </p>
            <p className="text-center text-gray-500 mt-1">
              Languages: {selectedAstrologer.languages}
            </p>
            <p className="text-center text-gray-500 mt-1">
              Experience: {selectedAstrologer.experience} Years
            </p>
            <p className="text-center text-black font-semibold mt-1">
              Rate: ₹{selectedAstrologer.rate}/min
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={`tel:${selectedAstrologer.phone}`}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultAstroHero;
