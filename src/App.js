// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Authen from './pages/authen';
import News from './pages/news';
import CourseAll from './pages/courseall';
import DetailNew from './pages/detail-new';
import DetailCourse from './pages/detail-course';
import Video from './pages/video';
import Profile from './pages/profile';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authen" element={<Authen />} />
        <Route path="/news" element={<News />} />
        <Route path="/detailnew" element={<DetailNew />} />
        <Route path="/courseall" element={<CourseAll />} />
        <Route path="/detailcourse" element={<DetailCourse />} />
        <Route path="/video" element={<Video />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
