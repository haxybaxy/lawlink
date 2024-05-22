// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './index';
import LawyerListings from './lawyerlistings';
import Support from './support';
import LogIn from './login';
import PostingBoard from './postingboard';
import Resources from './resources';
import SignUp from './signup';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lawyerlistings" element={<LawyerListings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/postingboard" element={<PostingBoard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
