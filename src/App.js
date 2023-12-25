// src/App.js
import React,{useState} from 'react';
import { Routes, Route,Navigate  } from 'react-router-dom';
import Home from './pages/home';
import Authen from './pages/authen';
import News from './pages/news';
import CourseAll from './pages/courseall';
import DetailNew from './pages/detail-new';
import DetailCourse from './pages/detail-course';
import Video from './pages/video';
import Profile from './pages/profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/authen"
          element = { isAuthenticated ? (
            <Navigate to="/" />
          ) : (
            <Authen setIsAuthenticated={setIsAuthenticated} />
          )} />
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
