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
import PostPage from './post';
import samplePost from './samples/postsample';
import userSample from './samples/ownusersample,jsx';
import OwnClientProfile from './ownclientprofile';
import OwnLawyerProfile from './ownlawyerprofile';
import OtherClientProfile from './otherclientprofile';
import OtherLawyerProfile from './otherlawyerprofile';
import sampleLawyer from './samples/ownlawyersample';
import otherSampleLawyer from './samples/otherlawyersample';
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
        <Route path="/post" element={<PostPage post={samplePost} />} />
        <Route path="/ownclientprof" element={<OwnClientProfile user={userSample} />} />
        <Route path="/ownlawyerprof" element={<OwnLawyerProfile lawyer={sampleLawyer} />} />
        <Route path="/otherclientprof" element={<OtherClientProfile user={userSample} />} />
        <Route path="/otherlawyerprof" element={<OtherLawyerProfile lawyer={otherSampleLawyer} />} />
      </Routes>
    </Router>
  );
}

export default App;
