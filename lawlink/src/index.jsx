// src/pages/Index.jsx
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Index = () => {
  return (      
    <main className="container mx-auto px-4 py-8 flex-grow">
      <NavBar />

      <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(hammer.webp)' }}>
        <h2 className="text-3xl font-bold text-white">Welcome to the Lawlink</h2>
      </div>


      {/* Title Section */}
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Services</h1>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 mx-8 mb-8" />

      {/* Main Content */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Lawyers</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Clients</h3>
              <p className="text-gray-600">Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Resources</h3>
              <p className="text-gray-600">Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Lawyer Service</h3>
              <p className="text-gray-600">Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Post Your Requests</h3>
              <p className="text-gray-600">Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
        </div>
      <Footer />      
    </main>

  );
}

export default Index;