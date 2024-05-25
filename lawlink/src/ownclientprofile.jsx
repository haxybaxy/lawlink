import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const OwnClientProfile = ({ user }) => {
  const [editingProfile, setEditingProfile] = useState(false);
  const [activeTab, setActiveTab] = useState('activity');
  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.name);
  const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto);
  const [paymentMethod, setPaymentMethod] = useState(user.paymentMethod);
  const [documents, setDocuments] = useState([]);
  const [documentFile, setDocumentFile] = useState(null);
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);
  const [inbox] = useState(user.inbox);

  const handleProfileEdit = (e) => {
    e.preventDefault();
    // Logic to handle profile photo file
    if (profilePhotoFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(profilePhotoFile);
    }
    // Save profile changes logic here
    setEditingProfile(false);
  };

  const handleProfilePhotoUpload = (e) => {
    setProfilePhotoFile(e.target.files[0]);
  };

  const handleDocumentUpload = (e) => {
    e.preventDefault();
    if (documentFile) {
      setDocuments([...documents, documentFile.name]);
      setDocumentFile(null);
    }
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
              src={profilePhoto}
              alt="Profil"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
              <p className="text-gray-600">@{username}</p>
            </div>
          </div>
          <button
            onClick={() => setEditingProfile(true)}
            className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700 mr-4"
          >
            Profil bearbeiten
          </button>
          <Link to="/login">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Abmelden
            </button>
          </Link>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <nav className="flex mb-4">
            <button
              onClick={() => setActiveTab('activity')}
              className={`mr-4 px-4 py-2 ${activeTab === 'activity' ? 'bg-yellow-800 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Letzte Aktivitäten
            </button>
            <button
              onClick={() => setActiveTab('inbox')}
              className={`mr-4 px-4 py-2 ${activeTab === 'inbox' ? 'bg-yellow-800 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Posteingang
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-2 ${activeTab === 'documents' ? 'bg-yellow-800 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Dokumente
            </button>
          </nav>

          {/* Tab Contents */}
          {activeTab === 'activity' && (
            <div>
              {/* Recent Activity Section */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Letzte Aktivitäten</h2>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Beiträge</h3>
                {user.recentPosts.map((post, index) => (
                  <div key={index} className="border-b border-gray-200 py-4">
                    <a href="#" className="text-blue-500 hover:underline font-semibold">{post.title}</a>
                    <p className="text-gray-600">Veröffentlicht am <span className="font-semibold">{post.date}</span></p>
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
          {activeTab === 'inbox' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Posteingang</h2>
              <ul>
                {inbox.map((message, index) => (
                  <li key={index} className="border-b border-gray-200 py-4">
                    <p className="text-gray-600"><span className="font-semibold">{message.sender}</span>: {message.content}</p>
                    <p className="text-gray-600">Empfangen am <span className="font-semibold">{message.date}</span></p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'documents' && (
            <div>
              {/* Documents Section */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Dokumente</h2>
              <form onSubmit={handleDocumentUpload} className="mb-4">
                <input
                  type="file"
                  onChange={(e) => setDocumentFile(e.target.files[0])}
                  className="mb-2"
                />
                <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700">Hochladen</button>
              </form>
              {documents.length > 0 && (
                <ul className="list-disc pl-6">
                  {documents.map((doc, index) => (
                    <li key={index} className="text-gray-800">{doc}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {editingProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profil bearbeiten</h2>
            <form onSubmit={handleProfileEdit} className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Benutzername</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="profilePhoto" className="block text-gray-700 text-sm font-bold mb-2">Profilbild</label>
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  onChange={handleProfilePhotoUpload}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2">Zahlungsmethode</label>
                <input
                  type="text"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700">Speichern</button>
              <button
                type="button"
                onClick={() => setEditingProfile(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 ml-4"
              >
                Abbrechen
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

export default OwnClientProfile;
