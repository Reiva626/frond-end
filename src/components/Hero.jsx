
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Menerima data dari App.jsx
export default function Hero({ isLoggedIn, setIsAuthModalOpen }) {
  
  // PERBAIKAN 1: Menambahkan state untuk popup Google
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  const navigate = useNavigate();
  
  const handleDaftarBeasiswa = () => {
    if (isLoggedIn) {
      // PERBAIKAN 2: Jika sudah login, JANGAN langsung ke web flask, tapi buka Popup Google
      setShowGooglePopup(true);
    } else {
      // Jika belum login, panggil modal login yang ada di Navbar
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-[#030712]/90 to-[#030712] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 font-medium text-sm mb-6 backdrop-blur-md">
          Portal Resmi Bantuan Beasiswa 2026
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
          Wujudkan Mimpimu, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
            Bersama Kami.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Pusat informasi, pendaftaran, dan pengumuman program beasiswa akademik maupun non-akademik untuk calon mahasiswa berprestasi.
        </p>
        <div className="flex justify-center gap-4">
          
          <button 
            onClick={handleDaftarBeasiswa} // PERBAIKAN 3: Panggil fungsi pengecek login di sini
            className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-gray-900 font-bold rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all transform hover:-translate-y-1"
          >
            Daftar Beasiswa
          </button>
          
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all">
          {/* Nomor telepon admin */}
            <a href="https://wa.me/">Chat admin</a>
          </button>
        </div>
      </div>
      
      {showGooglePopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0f172a]/90 border border-slate-700/50 p-8 rounded-3xl w-full max-w-sm relative shadow-2xl text-center">
            
            {/* Tombol Silang (Close) */}
            <button 
              onClick={() => setShowGooglePopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all font-bold"
            >
              x
            </button>

            <h3 className="text-xl font-bold text-white mb-2">Pendaftaran Baru</h3>
            <p className="text-sm text-slate-400 mb-8">Pilih metode pendaftaran untuk melanjutkan.</p>

            {/* Tombol Google (Sesuai dengan kode asli Anda) */}
            <button
              onClick={(e) => {
                e.preventDefault();
                
                const linkGoogke = "http://localhost:5173/google"
                window.open(linkGoogke)
                setShowGooglePopup(false)
              }}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              {/* Logo Google (SVG Bawaan) */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Daftar menggunakan akun google
            </button>
            
          {/* PERBAIKAN 4: Menutup tag div yang sebelumnya terpotong */}
          </div>
        </div>
      )}
    </div>
  );
}