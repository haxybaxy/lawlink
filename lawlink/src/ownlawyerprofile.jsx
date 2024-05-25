import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const OwnLawyerProfile = ({ lawyer }) => {
  const [editingProfile, setEditingProfile] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [username, setUsername] = useState(lawyer.username);
  const [name, setName] = useState(lawyer.name);
  const [profilePhoto, setProfilePhoto] = useState(lawyer.profilePhoto);
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(lawyer.paymentMethod);
  const [priceRange, setPriceRange] = useState(lawyer.priceRange);
  const [location, setLocation] = useState(lawyer.location);
  const [documents, setDocuments] = useState([]);
  const [documentFile, setDocumentFile] = useState(null);
  const [reviewsPublic, setReviewsPublic] = useState(lawyer.reviewsPublic);
  const [inbox] = useState(lawyer.inbox);
  const [description, setDescription] = useState(lawyer.description);

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
    lawyer.description = description;
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
              alt="Profilbild"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
              <p className="text-gray-600">@{username}</p>
              <p className="text-gray-600">{location}</p>
              <p className="text-gray-600">Preisspanne: {priceRange}</p>
            </div>
          </div>
          <button
            onClick={() => setEditingProfile(true)}
            className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700 mr-4"
          >
            Profil Bearbeiten
          </button>
          <Link to="/login"><button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Abmelden
          </button></Link>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <nav className="flex mb-4">
            <button
              onClick={() => setActiveTab('description')}
              className={`mr-4 px-4 py-2 ${activeTab === 'description' ? 'bg-yellow-800 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Beschreibung
            </button>
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
              onClick={() => setActiveTab('reviews')}
              className={`mr-4 px-4 py-2 ${activeTab === 'reviews' ? 'bg-yellow-800 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Rezensionen
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-2 ${activeTab === 'documents' ? 'bg-yellow-800 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
            >
              Dokumente
            </button>
          </nav>

          {/* Tab Contents */}
          {activeTab === 'description' && (
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Beschreibung</h2>
                <p className="text-gray-700">{description}</p>
            </div>
          )}
          {activeTab === 'activity' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Letzte Aktivitäten</h2>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Beiträge</h3>
                {lawyer.recentPosts.map((post, index) => (
                  <div key={index} className="border-b border-gray-200 py-4">
                    <a href="#" className="text-blue-500 hover:underline font-semibold">{post.title}</a>
                    <p className="text-gray-600">Veröffentlicht am <span className="font-semibold">{post.date}</span></p>
                  </div>
                ))}
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Kommentare</h3>
                {lawyer.recentComments.map((comment, index) => (
                  <div key={index} className="border-b border-gray-200 py-4">
                    <p className="text-gray-600">{comment.content}</p>
                    <p className="text-gray-600">Kommentar am <span className="font-semibold">{comment.date}</span></p>
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
          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Bewertungen und Rezensionen</h2>
              <p className="text-gray-600">Diese Sektion ist {reviewsPublic ? 'öffentlich' : 'privat'}.</p>
              <button
                onClick={() => setReviewsPublic(!reviewsPublic)}
                className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700"
              >
                {reviewsPublic ? 'Privat machen' : 'Öffentlich machen'}
              </button>
            </div>
          )}
          {activeTab === 'documents' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Dokumente</h2>
              <form onSubmit={handleDocumentUpload}>
                <input
                  type="file"
                  onChange={(e) => setDocumentFile(e.target.files[0])}
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-4"
                />
                <button
                  type="submit"
                  className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700"
                >
                  Hochladen
                </button>
              </form>
              <ul className="mt-4">
                {documents.map((doc, index) => (
                  <li key={index} className="text-gray-800">{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Profile Edit Modal */}
      {editingProfile && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full max-h-[calc(100vh-160px)] overflow-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profil Bearbeiten</h2>
            <form onSubmit={handleProfileEdit} className="grid grid-cols-3 gap-4">
                <div className="mb-4 col-span-1">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Benutzername</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="profilePhoto" className="block text-gray-700 text-sm font-bold mb-2">Profilbild</label>
                    <input
                        type="file"
                        id="profilePhoto"
                        onChange={handleProfilePhotoUpload}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="priceRange" className="block text-gray-700 text-sm font-bold mb-2">Preisspanne</label>
                    <input
                        type="text"
                        id="priceRange"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Ort</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4 col-span-1">
                    <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2">Zahlungsmethode</label>
                    <input
                        type="text"
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4 col-span-3">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Beschreibung</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                        rows="4"
                    />
                </div>
                <div className="flex justify-end mt-4 col-span-3">
                    <button
                        type="submit"
                        className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700"
                    >
                        Speichern
                    </button>
                    <button
                        type="button"
                        onClick={() => setEditingProfile(false)}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 ml-4"
                    >
                        Abbrechen
                    </button>
                </div>
            </form>
          </div>
        </div>
      )}


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OwnLawyerProfile;
