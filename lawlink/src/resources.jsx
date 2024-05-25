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
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Ressourcen</h1>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 mx-8 mb-8" />

      {/* Resource Library */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Juristische Ressourcenbibliothek</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Gesetze</h3>
            <p className="text-gray-600">Zugriff auf die neuesten Gesetze und Vorschriften zu verschiedenen Rechtsgebieten.</p>
            {/* Include links to legal resources */}
            <ul className="list-disc list-inside mt-2">
              <li><a href="#" className="text-blue-500 hover:underline">Verfassung von Fulan</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Familienrecht</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Strafgesetzbuch</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Verträge</h3>
            <p className="text-gray-600">Finden Sie Vorlagen und Beispiele für rechtliche Verträge für verschiedene Zwecke.</p>
            {/* Include links to contract resources */}
            <ul className="list-disc list-inside mt-2">
              <li><a href="#" className="text-blue-500 hover:underline">Arbeitsvertrag</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Mietvertrag</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Partnerschaftsvertrag</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dokumente</h3>
            <p className="text-gray-600">Laden Sie notwendige rechtliche Dokumente für verschiedene Situationen herunter.</p>
            {/* Include links to legal document resources */}
            <ul className="list-disc list-inside mt-2">
              <li><a href="#" className="text-blue-500 hover:underline">Vollmachtformular</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Testamentvorlage</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Vorfallberichtsformular</a></li>
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
