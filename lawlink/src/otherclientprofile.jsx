import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const OtherClientProfile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('activity');
  const [message, setMessage] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Logic to send the message
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Profile Section */}
      <div className="container mx-auto px-8 py-8 flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex items-center mb-6">
            <img
              src={user.profilePhoto}
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-600">@{user.username}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <nav className="flex mb-4">
            <button
              onClick={() => setActiveTab('activity')}
              className={`mr-4 px-4 py-2 ${activeTab === 'activity' ? 'bg-yellow-800 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Letzte Aktivitäten
            </button>
            <button
              onClick={() => setActiveTab('message')}
              className={`px-4 py-2 ${activeTab === 'message' ? 'bg-yellow-800 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Nachricht
            </button>
          </nav>

        {activeTab === 'activity' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Letzte Aktivitäten</h2>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Beiträge</h3>
              {user.recentPosts.map((post, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <a href="#" className="text-blue-500 hover:underline font-semibold">{post.title}</a>
                  <p className="text-gray-600">Gepostet am <span className="font-semibold">{post.date}</span></p>
                </div>
              ))}
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Kommentare</h3>
              {user.recentComments.map((comment, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <p className="text-gray-800">{comment.content}</p>
                  <p className="text-gray-600">Kommentiert am <span className="font-semibold">{comment.date}</span></p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'message' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nachricht senden</h2>
            <form onSubmit={handleMessageSubmit}>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="border rounded w-full py-2 px-3 text-gray-700"
                ></textarea>
              </div>
              <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700">Senden</button>
            </form>
          </div>
        )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OtherClientProfile;
