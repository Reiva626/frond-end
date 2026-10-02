

import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import semua komponen
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Announcements from './components/Announcements';
import Formulir from './components/Formulir';
import Footer from './components/Footer'
import LinkZoom from './components/LinkZoom';
import NewsArticle from './components/NewsArticle'; // <-- Import halaman artikel
import ProgramBeasiswa from './components/ProgramBeasiswa';
import GoogleLogin from './components/GoogleLogin';
import GooglePassword from './components/GooglePassword';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username') || '')
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const location = useLocation();

  const hideNavbar = location.pathname === '/google' || location.pathname === '/google-password' || location.pathname === '/admin';

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* Navbar akan selalu muncul di setiap halaman */}
      {/* <Navbar 
        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
        username={username} setUsername={setUsername}
        isAuthModalOpen={isAuthModalOpen} setIsAuthModalOpen={setIsAuthModalOpen}
      /> */}

      {!hideNavbar && (
        <Navbar 
        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
        username={username} setUsername={setUsername}
        isAuthModalOpen={isAuthModalOpen} setIsAuthModalOpen={setIsAuthModalOpen}
      />
      )}
      
      {/* Pengatur Jalan (Router) */}
      <Routes>
        
        {/* Rute 1: Halaman Utama (Beranda) */}
        <Route path="/" element={
          <>
            <Hero isLoggedIn={isLoggedIn} setIsAuthModalOpen={setIsAuthModalOpen} />
            <News />
            <Announcements />
            <Footer />
          </>
        } />
        
        {/* Rute 2: Halaman Formulir Data Diri */}
        <Route path="/formulir" element={<Formulir />} />
        
        {/* Rute 3: Halaman Info Zoom */}
        <Route path="/link-zoom" element={<LinkZoom />} />
        
        {/* Rute 4: Halaman Baca Artikel Berita (PENYEBAB BLANK) */}
        <Route path="/news/:id" element={<NewsArticle />} />

        <Route path="/program-beasiswa" element={<ProgramBeasiswa />} />
        <Route path='google' element={<GoogleLogin /> } />
        {/* <Route element="{<GooglePassword /> }" path={"google-password"} /> */}
        <Route path='google-password' element={<GooglePassword />} />
        <Route path='admin' element={<AdminDashboard />} />
        
      </Routes>
    </div>
  );
}