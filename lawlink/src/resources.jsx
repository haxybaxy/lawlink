import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Resources = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Title Section */}
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Resources</h1>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 mx-8 mb-8" />

      {/* Resource Library */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Resource Library</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Laws</h3>
            <p className="text-gray-600">Access the latest laws and regulations pertaining to various legal areas.</p>
            {/* Include links to legal resources */}
            <ul className="list-disc list-inside mt-2">
              <li><a href="#" className="text-blue-500 hover:underline">Constitution of Fulan</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Family Law</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Criminal Code</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contracts</h3>
            <p className="text-gray-600">Find templates and examples of legal contracts for various purposes.</p>
            {/* Include links to contract resources */}
            <ul className="list-disc list-inside mt-2">
              <li><a href="#" className="text-blue-500 hover:underline">Employment Contract</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Rental Agreement</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Partnership Agreement</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Documents</h3>
            <p className="text-gray-600">Download necessary legal documents for different situations.</p>
            {/* Include links to legal document resources */}
            <ul className="list-disc list-inside mt-2">
              <li><a href="#" className="text-blue-500 hover:underline">Power of Attorney Form</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Will Template</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Incident Report Form</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Resources;
