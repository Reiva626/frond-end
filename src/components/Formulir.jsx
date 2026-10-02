import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Formulir() {
  const navigate = useNavigate();
  
  // 1. Siapkan state untuk menyimpan nama/email yang sedang login
  const [activeUser, setActiveUser] = useState('');

  // 2. Gunakan useEffect untuk mengambil data dari memori browser saat halaman dibuka
  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setActiveUser(savedUser); // Simpan ke state
    }
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault(); 
    
    // Lompat ke halaman link-zoom setelah form disubmit
    navigate('/link-zoom');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="bg-[#0f172a]/80 border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md">
          <div className="mb-8 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-extrabold text-white mb-2">Lengkapi Data Diri</h2>
            {/* 3. Tampilkan pesan sapaan khusus menggunakan nama/email mereka */}
            <p className="text-slate-400 text-sm">
              Halo <span className="text-sky-400 font-bold">{activeUser}</span>, pastikan semua data yang Anda masukkan sesuai.
            </p>
          </div>

          <form onSubmit={handleSubmitForm} className="space-y-6">
            
            {/* BARU: Kolom Akun Pendaftar (Otomatis terisi & Terkunci) */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Akun Pendaftar (Otomatis)</label>
              <input 
                type="text" 
                value={activeUser} 
                readOnly 
                disabled 
                className="w-full bg-[#030712]/80 border border-slate-700 text-slate-500 font-medium px-4 py-3 rounded-xl cursor-not-allowed focus:outline-none" 
              />
            </div>

            {/* Baris 1: Nama & NIK */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap (Sesuai KTP)</label>
                <input type="text" required placeholder="Ketik nama lengkap..." className="w-full bg-[#030712]/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Asal sekolah</label>
                <input type="text" required placeholder="Masukan asal sekolah" className="w-full bg-[#030712]/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
              </div>
            </div>

            {/* Baris 2: Alamat Lengkap */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Alamat Domisili</label>
              <textarea required rows="3" placeholder="Nama Jalan, RT/RW, Kelurahan, Kecamatan..." className="w-full bg-[#030712]/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"></textarea>
            </div>

            {/* Baris 3: Kode Pos & No HP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Kode Pos</label>
                <input type="text" required placeholder="Contoh: 40111" className="w-full bg-[#030712]/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nomor WhatsApp Aktif</label>
                <input type="tel" required placeholder="0812..." className="w-full bg-[#030712]/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="pt-6">
              <button type="submit" className="w-full bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-1">
                Simpan & Lanjutkan Pendaftaran
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}