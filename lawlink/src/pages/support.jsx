import React from 'react';

const Support = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">

      {/* Title Section */}
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Support/FAQ</h1>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 mx-8 mb-8" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-wrap -mx-4">
          {/* FAQ Section */}
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQ</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">What is Lorem Ipsum?</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at purus odio. Vivamus et mollis sapien, ac cursus felis.</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I contact support?</h3>
                <p className="text-gray-600">You can contact support by filling out the form below or by sending an email to support@lawproject.com.</p>
              </div>
              {/* Add more FAQ items as needed */}
            </div>
          </div>

          {/* Support Request Form */}
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Submit a Support Request</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="border rounded w-full py-2 px-3 text-gray-700" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="border rounded w-full py-2 px-3 text-gray-700" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="border rounded w-full py-2 px-3 text-gray-700"></textarea>
                </div>
                <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Support;
