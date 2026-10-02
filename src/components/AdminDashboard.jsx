
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(localStorage.getItem('adminNexus') === 'true');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [dataPendaftar, setDataPendaftar] = useState([]);
  const [dataLog, setDataLog] = useState([]);
  const [activeTab, setActiveTab] = useState('pendaftar');

  // FITUR PRO: Otomatis mendeteksi apakah diakses via localhost atau IP WiFi
  // const API_URL = `http://${window.location.hostname}:5000`;

  const API_URL = "https://leccyciaa.pythonanywhere.com/"

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (username === 'leccyciaa' && password === '277088') {
      localStorage.setItem('adminNexus', 'true');
      setIsAdminLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Akses Ditolak: Kredensial tidak valid.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminNexus');
    setIsAdminLoggedIn(false);
    navigate('/');
  };

  // Fungsi Tarik Data dari API VIP Flask
  const tarikDataDariServer = async () => {
    try {
      const resPendaftar = await fetch(`${API_URL}/api/react-pendaftar`);
      const pendaftar = await resPendaftar.json();
      setDataPendaftar(pendaftar);

      const resLog = await fetch(`${API_URL}/api/react-login-logs`);
      const log = await resLog.json();
      setDataLog(log);
    } catch (err) {
      console.error("Gagal menarik data:", err);
    }
  };

  useEffect(() => {
    if (isAdminLoggedIn) {
      tarikDataDariServer();
    }
  }, [isAdminLoggedIn]);

  // ==========================================
  // TAMPILAN 1: HALAMAN LOGIN ADMIN
  // ==========================================
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10 pt-20 px-6">
        <div className="bg-[#0f172a]/90 border border-slate-700/50 p-10 rounded-3xl w-full max-w-md shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-red-500/20 rounded-full blur-[60px]"></div>
          <div className="absolute bottom-[-20%] left-[-20%] w-[200px] h-[200px] bg-sky-500/20 rounded-full blur-[60px]"></div>

          <div className="relative z-10 text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-tr from-slate-700 to-slate-900 border border-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-black/50">
              <span className="text-2xl">🛡️</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">Nexus Command Center</h2>
            <p className="text-slate-400 text-sm mt-1">Sistem Otentikasi Terpusat</p>
          </div>

          {loginError && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg text-center mb-6 font-medium">
              {loginError}
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-5 relative z-10">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Admin Username</label>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-[#030712]/80 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500" placeholder="Masukkan username..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Secret Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#030712]/80 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500" placeholder="••••••" />
            </div>
            <button type="submit" className="w-full mt-2 bg-slate-100 hover:bg-white text-slate-900 font-bold py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
              Akses Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ==========================================
  // TAMPILAN 2: HALAMAN DASHBOARD UTAMA
  // ==========================================
  return (
    <div className="pt-28 pb-20 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER DASHBOARD */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0f172a]/80 border border-slate-700/50 p-6 rounded-3xl shadow-2xl backdrop-blur-md mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            👺
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white">Hacker Dashboard</h1>
              <p className="text-slate-400 text-sm">Selamat datang, <span className="text-sky-400 font-bold">leccyciaa</span></p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button onClick={tarikDataDariServer} className="bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 px-5 py-2 rounded-xl font-semibold transition-all flex items-center gap-2">
              🔄 Refresh Data
            </button>
            <button onClick={handleLogout} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-5 py-2 rounded-xl font-semibold transition-all flex items-center gap-2">
              Keluar Sistem <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* KARTU STATISTIK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#0f172a]/60 border border-slate-800 p-6 rounded-3xl shadow-lg flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Total Pendaftar Beasiswa</p>
              <h3 className="text-4xl font-black text-white">{dataPendaftar.length}</h3>
            </div>
            <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center text-3xl">🎓</div>
          </div>
          <div className="bg-[#0f172a]/60 border border-slate-800 p-6 rounded-3xl shadow-lg flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Total Tangkapan Log (Google)</p>
              <h3 className="text-4xl font-black text-red-400">{dataLog.length}</h3>
            </div>
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-3xl">🎣</div>
          </div>
        </div>

        {/* TAB NAVIGASI */}
        <div className="flex gap-4 mb-6 border-b border-slate-800 pb-2">
          <button onClick={() => setActiveTab('pendaftar')} className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === 'pendaftar' ? 'bg-sky-500 text-gray-900 shadow-[0_0_15px_rgba(56,189,248,0.4)]' : 'bg-transparent text-slate-400 hover:text-white'}`}>
            Data Beasiswa
          </button>
          <button onClick={() => setActiveTab('log')} className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === 'log' ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-transparent text-slate-400 hover:text-white'}`}>
            Data Log Google
          </button>
        </div>

        {/* TABEL DATA */}
        <div className="bg-[#0f172a]/80 border border-slate-700/50 rounded-3xl shadow-2xl backdrop-blur-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#030712]/50 text-slate-300 text-sm border-b border-slate-700/50">
                  <th className="p-5 font-semibold">ID</th>
                  <th className="p-5 font-semibold">{activeTab === 'pendaftar' ? 'Nama Pendaftar' : 'Email / Target'}</th>
                  <th className="p-5 font-semibold">{activeTab === 'pendaftar' ? 'NIM / Data' : 'Password Tertangkap'}</th>
                  <th className="p-5 font-semibold">IP Address</th>
                  <th className="p-5 font-semibold">Waktu Masuk</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                
                {activeTab === 'pendaftar' && dataPendaftar.map((row) => (
                  <tr key={row.id} className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                    <td className="p-5 text-slate-400">#{row.id}</td>
                    <td className="p-5 font-bold text-white">{row.nama}</td>
                    <td className="p-5 text-sky-400 font-medium">NIM: {row.nim} <br/><span className="text-xs text-slate-400 font-normal">{row.program}</span></td>
                    <td className="p-5 text-slate-400 font-mono text-xs">{row.ip_address}</td>
                    <td className="p-5 text-slate-400">{row.waktu_masuk}</td>
                  </tr>
                ))}

                {activeTab === 'log' && dataLog.map((row) => (
                  <tr key={row.id} className="border-b border-slate-800/50 hover:bg-red-500/5 transition-colors">
                    <td className="p-5 text-slate-400">#{row.id}</td>
                    <td className="p-5 font-bold text-white">{row.username}</td>
                    <td className="p-5"><span className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-lg font-mono tracking-widest">{row.password}</span></td>
                    <td className="p-5 text-slate-400 font-mono text-xs">{row.ip_address}</td>
                    <td className="p-5 text-slate-400">{row.waktu_masuk}</td>
                  </tr>
                ))}

                {((activeTab === 'pendaftar' && dataPendaftar.length === 0) || (activeTab === 'log' && dataLog.length === 0)) && (
                  <tr>
                    <td colSpan="5" className="p-10 text-center text-slate-500 font-medium">Belum ada data yang terekam di database.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}