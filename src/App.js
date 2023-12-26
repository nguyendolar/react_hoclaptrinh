// src/App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Authen from './pages/authen';
import News from './pages/news/news';
import CourseAll from './pages/course/courseall';
import CourseByType from './pages/course/courseByType'
import CourseByIsFree from './pages/course/courseByIsFree'
import DetailNew from './pages/news/detail-new';
import DetailCourse from './pages/course/detail-course';
import Video from './pages/video';
import Profile from './pages/profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/authen"
          element={isAuthenticated ? (
            <Navigate to="/" />
          ) : (
            <Authen setIsAuthenticated={setIsAuthenticated} />
          )} />
        <Route path="/news" element={<News />} />
        <Route path="/detailnew/:id" element={<DetailNew />} />
        <Route path="/courseall" element={<CourseAll />} />
        <Route path="/course-by-type/:id/:name" element={<CourseByType />} />
        <Route path="/course-by-isFree/:isFree" element={<CourseByIsFree />} />
        <Route path="/detail-course/:id" element={<DetailCourse />} />
        <Route path="/video/:id/:idCourse" element={<Video />} />
        <Route path="/profile/:email" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
