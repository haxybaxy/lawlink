// src/pages/LawyerListings.jsx
import React from 'react';

const LawyerListings = () => {
  return (
    <div>
  <div class="container mx-auto px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Lawyer Listings</h1>
  </div>

  <hr class="border-t border-gray-300 mx-8 mb-8"></hr>

  <div class="container mx-auto px-4 flex-grow flex">
    <div class="w-1/4 p-6 rounded-lg mr-4">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Search for Lawyers</h3>
      <div class="mb-4">
        <input type="text" placeholder="Specialty" id="specialty" class="border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div class="mb-4">
        <input type="text" placeholder="Area" id="area" class="border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div class="mb-4">
        <input type="text" placeholder="Price" id="price" class="border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <button id="searchBtn" class="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700">Search</button>
    </div>

    <div class="border-l border-gray-300 mx-4"></div>

    <div class="w-2/4 p-6 rounded-lg ">
      <h4 class="text-xl font-bold text-gray-800 mb-4">Results</h4>
      <div id="results">
      </div>
    </div>
  </div>
    </div>
  );
};

export default LawyerListings;
