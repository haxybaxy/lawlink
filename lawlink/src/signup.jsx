import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const SignUp = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Title Section */}
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sign Up</h1>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 mx-8 mb-8" />
      
      {/* Sign Up */}
      <div className="bg-gray-100 flex items-center justify-center flex-grow py-8">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap -mx-4">
          {/* Client Sign Up */}
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div className="p-8 bg-white shadow rounded">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign Up as a Client</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="client-name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" id="client-name" name="client-name" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="client-email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="email" id="client-email" name="client-email" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter your email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="client-password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <input type="password" id="client-password" name="client-password" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter your password" />
                </div>
                <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full">Sign Up</button>
                <p className="text-gray-600 text-center mt-4">Already have an account? <a href="login.html" className="text-yellow-800 hover:underline">Login</a></p>
              </form>
            </div>
          </div>

          {/* Separator */}
          <div className="w-px bg-gray-300 mx-4"></div>

          {/* Lawyer Sign Up */}
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div className="p-8 bg-white shadow rounded">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign Up as a Lawyer</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="lawyer-name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" id="lawyer-name" name="lawyer-name" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="lawyer-email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="email" id="lawyer-email" name="lawyer-email" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter your email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="lawyer-password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <input type="password" id="lawyer-password" name="lawyer-password" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter your password" />
                </div>
                <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full">Sign Up</button>
                <p className="text-gray-600 text-center mt-4">Already have an account? <a href="login.html" className="text-yellow-800 hover:underline">Login</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUp;
