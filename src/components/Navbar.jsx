
          import React, { useState } from 'react';
          import { useNavigate } from 'react-router-dom';
          
          export default function Navbar({ isLoggedIn, setIsLoggedIn, username, setUsername, isAuthModalOpen, setIsAuthModalOpen }) {
            // Wajib ada agar bisa pindah halaman tanpa loading
            const navigate = useNavigate(); 
          
            const [isLoginMode, setIsLoginMode] = useState(true);
            const [tempUsername, setTempUsername] = useState('');
            const [tempPassword, setTempPassword] = useState('');
            const [showSuccessPopup, setShowSuccessPopup] = useState(false);
            const [errorMsg, setErrorMsg] = useState('');
          
            const handleAuth = async (e) => {
              e.preventDefault();
              setErrorMsg('');
              
              const endpoint = isLoginMode ? '/api/user-login' : '/api/register';
              
              try {
                const response = await fetch(`https://leccyciaa.pythonanywhere.com${endpoint}`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ username: tempUsername, password: tempPassword })
                });
                const data = await response.json();
                
                if (data.status === 'success') {
                  setUsername(tempUsername);
                  setIsLoggedIn(true);
                  setIsAuthModalOpen(false);
                  setTempPassword('');

                  localStorage.setItem('isLoggIn', 'true');
                  localStorage.setItem('username', tempUsername);
                  
                  setShowSuccessPopup(true);
                  setTimeout(() => setShowSuccessPopup(false), 2500);
                } else {
                  setErrorMsg(data.pesan);
                }
              } catch (err) {
                setErrorMsg("Gagal terhubung ke server database.");
              }
            };
          
            // Fungsi Pindah Halaman dengan Perlindungan
            const handleProtectedLink = () => {
              if (isLoggedIn) {
                navigate('/program-beasiswa'); // Lompat tanpa loading!
              } else {
                setIsAuthModalOpen(true); // Munculkan pop-up login
              }
            };
          
            return (
              <>
                <nav className="fixed w-full top-0 z-40 bg-[#030712]/70 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
                  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                      <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                        <span className="text-white font-black text-xl">V</span>
                      </div>
                      <span className="text-xl font-bold tracking-wide text-white">Vercel<span className="text-sky-400">Edu</span></span>
                    </div>
          
                    <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                      {/* Tombol Beranda */}
                      <li onClick={() => navigate('/')} className="hover:text-sky-400 cursor-pointer transition-colors">
                        Beranda
                      </li>
                      
                      {/* Tombol Program Beasiswa */}
                      <li onClick={handleProtectedLink} className="hover:text-sky-400 cursor-pointer transition-colors">
                        Program Beasiswa
                      </li>
                      
                      <li className="hover:text-sky-400 cursor-pointer transition-colors">Pengumuman</li>
                    </ul>
          
                    <div className="flex items-center gap-4">
                      
                      
                      {isLoggedIn ? (
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 transition-all">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                            {username.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-sm font-semibold text-white">{username}</span>
                        </div>
                      ) : (
                        <button onClick={() => setIsAuthModalOpen(true)} className="px-5 py-2 text-sm font-bold bg-sky-500 hover:bg-sky-400 text-gray-900 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all">
                          Masuk Portal
                        </button>
                      )}
                    </div>
                  </div>
                </nav>
          
                {/* === MODAL LOGIN & SIGN IN TERPADU === */}
                {isAuthModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-[#0f172a]/90 border border-slate-700/50 p-8 rounded-3xl w-full max-w-md relative shadow-2xl">
                      <button onClick={() => setIsAuthModalOpen(false)} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all font-bold">x</button>
                      
                      <div className="flex gap-2 mb-6 bg-[#030712] p-1 rounded-xl">
                        <button onClick={() => { setIsLoginMode(true); setErrorMsg(''); }} className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${isLoginMode ? 'bg-sky-500 text-slate-900' : 'text-slate-400 hover:text-white'}`}>Login</button>
                        <button onClick={() => { setIsLoginMode(false); setErrorMsg(''); }} className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${!isLoginMode ? 'bg-sky-500 text-slate-900' : 'text-slate-400 hover:text-white'}`}>Sign In (Baru)</button>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-white mb-2">{isLoginMode ? 'Selamat Datang Kembali' : 'Buat Akun Baru'}</h2>
                      {errorMsg && <p className="text-red-400 text-sm mb-4 font-medium">{errorMsg}</p>}
                      
                      <form onSubmit={handleAuth} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-1">Username</label>
                          <input type="text" required value={tempUsername} onChange={(e) => setTempUsername(e.target.value)} className="w-full bg-[#030712]/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                          <input type="password" required value={tempPassword} onChange={(e) => setTempPassword(e.target.value)} className="w-full bg-[#030712]/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        </div>
                        <button type="submit" className="w-full mt-2 bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 text-gray-900 font-bold py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-0.5">
                          {isLoginMode ? 'Masuk ke Portal' : 'Daftar & Masuk'}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
          
                {/* Popup Sukses */}
                {showSuccessPopup && (
                  <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
                    <div className="bg-[#0f172a] border border-emerald-500/50 p-8 rounded-3xl w-full max-w-sm text-center shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                        <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{isLoginMode ? 'Login Berhasil!' : 'Akun Terdaftar!'}</h3>
                      <p className="text-slate-400">Selamat datang, <span className="text-emerald-400 font-semibold">{username}</span>.</p>
                    </div>
                  </div>
                )}
              </>
            );
          }