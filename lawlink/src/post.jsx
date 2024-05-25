import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const PostPage = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText.trim()]);
      setCommentText('');
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Post Content */}
      <div className="container mx-auto px-8 py-8 flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">
            Veröffentlicht von <Link to="/otherlawyerprof"><span className="font-semibold">{post.user}</span></Link> am <span className="font-semibold">{post.date}</span>
          </p>
          <div className="text-gray-800 mb-6">
            {post.content}
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kommentare</h2>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <p className="text-gray-800">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Noch keine Kommentare. Sei der Erste, der einen Kommentar abgibt!</p>
          )}
        </div>

        {/* Add Comment Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Einen Kommentar hinzufügen</h2>
          <form onSubmit={handleAddComment}>
            <div className="mb-4">
              <label htmlFor="commentText" className="block text-gray-700 text-sm font-bold mb-2">Kommentar</label>
              <textarea
                id="commentText"
                name="commentText"
                rows="4"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="border rounded w-full py-2 px-3 text-gray-700"
              ></textarea>
            </div>
            <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700">Abschicken</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PostPage;
