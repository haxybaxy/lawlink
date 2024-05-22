import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Title Section */}
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Log In</h1>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 mx-8 mb-8" />

      {/* Log In */}
      <div className="bg-gray-100 flex items-center justify-center flex-grow py-8">
        <div className="max-w-md w-full p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter your password" />
            </div>
            <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full">Login</button>
            <p className="text-gray-600 text-center mt-4">Don't have an account? <Link to="/signup" className="text-yellow-800 hover:underline">Sign up</Link></p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LogIn;
