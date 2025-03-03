import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ProfilePage from './pages/ProfilePage';
import CertificatesPage from './pages/CertificatesPage';
import VoiceAssistant from './components/VoiceAssistant';
import LoginPage from './pages/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {isLoggedIn && <Header />}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={isLoggedIn ? <HomePage /> : <LoginPage onLogin={handleLogin} />} 
            />
            <Route 
              path="/courses" 
              element={isLoggedIn ? <CoursesPage /> : <Navigate to="/" />} 
            />
            <Route 
              path="/courses/:courseId" 
              element={isLoggedIn ? <CourseDetailPage /> : <Navigate to="/" />} 
            />
            <Route 
              path="/profile" 
              element={isLoggedIn ? <ProfilePage userData={userData} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/certificates" 
              element={isLoggedIn ? <CertificatesPage /> : <Navigate to="/" />} 
            />
          </Routes>
        </main>
        {isLoggedIn && <Footer />}
        {isLoggedIn && <VoiceAssistant />}
      </div>
    </Router>
  );
}

export default App;