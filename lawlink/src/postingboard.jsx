import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const PostingBoard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Title Section */}
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Posting Board</h1>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 mx-8 mb-8" />

      {/* Posting Board */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* View Posts Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Posts</h2>
          {/* Sample Post */}
          <div className="border-b border-gray-200 py-4">
            <a href="#" className="text-blue-500 hover:underline font-semibold">Post Title</a>
            <p className="text-gray-600">Posted by <span className="font-semibold">User123</span> on <span className="font-semibold">May 19, 2024</span></p>
          </div>
          <div className="border-b border-gray-200 py-4">
            <a href="#" className="text-blue-500 hover:underline font-semibold">Post Title</a>
            <p className="text-gray-600">Posted by <span className="font-semibold">User124</span> on <span className="font-semibold">May 19, 2024</span></p>
          </div>
          <div className="border-b border-gray-200 py-4">
            <a href="#" className="text-blue-500 hover:underline font-semibold">Post Title</a>
            <p className="text-gray-600">Posted by <span className="font-semibold">User125</span> on <span className="font-semibold">May 19, 2024</span></p>
          </div>
          <div className="border-b border-gray-200 py-4">
            <a href="#" className="text-blue-500 hover:underline font-semibold">Post Title</a>
            <p className="text-gray-600">Posted by <span className="font-semibold">User126</span> on <span className="font-semibold">May 19, 2024</span></p>
          </div>
          {/* Sample Posts End */}
          {/* Include more posts here */}
        </div>

        {/* Button to Make a New Post */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Make a New Post
        </button>
      </div>

      {/* Modal for New Post Form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">New Post</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="postTitle" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input type="text" id="postTitle" name="postTitle" className="border rounded w-full py-2 px-3 text-gray-700" />
              </div>
              <div className="mb-4">
                <label htmlFor="postContent" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                <textarea id="postContent" name="postContent" rows="4" className="border rounded w-full py-2 px-3 text-gray-700"></textarea>
              </div>
              <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700">Submit</button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 ml-4"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PostingBoard;
