import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const LawyerListings = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Title Section */}
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Lawyer Listings</h1>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 mx-8 mb-8" />

      {/* Main Content */}
      <div className="container mx-auto px-4 flex-grow flex">
        {/* Search Section */}
        <div className="w-1/4 p-6 rounded-lg mr-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Search for Lawyers</h3>
          <div className="mb-4">
            <input type="text" placeholder="Specialty" id="specialty" className="border rounded w-full py-2 px-3 text-gray-700" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Area" id="area" className="border rounded w-full py-2 px-3 text-gray-700" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Price" id="price" className="border rounded w-full py-2 px-3 text-gray-700" />
          </div>
          <button id="searchBtn" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700">Search</button>
        </div>

        {/* Separator */}
        <div className="border-l border-gray-300 mx-4 mb-6"></div>

        {/* Results Section */}
        <div className="w-2/4 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Results</h4>
          <div id="results">
            {/* Search results will be displayed here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LawyerListings;
