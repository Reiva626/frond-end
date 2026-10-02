
// FASE 2

import React, {useState} from 'react';
// import React, { useState } from 'react';


export default function Announcements() {
  
    // State untuk mengontrol munculnya pop-up
    const [showPopup, setShowPopup] = useState(false);
  
    // Fungsi saat tombol download diklik
    const handleDownloadClick = (e) => {
      e.preventDefault(); // Mencegah browser melakukan download/pindah halaman
      setShowPopup(true); // Tampilkan popup
      
      // // Sembunyikan otomatis setelah 3 detik
      // setTimeout(() => {
      //   setShowPopup(false);
      // }, 3000);
    };


  return (
    <div id="pengumuman" className="py-20 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Kolom Kiri: Pengumuman */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
            <span className="p-2 bg-sky-500/20 rounded-lg text-sky-400">📢</span> 
            Pengumuman Lembaga Vercel
          </h2>
          <div className="space-y-4">
            {[
              { title: "Jadwal Wawancara Beasiswa Prestasi Gelombang 1", date: "24 Oktober 2026", status: "Penting" },
              { title: "Perpanjangan Masa Unggah Berkas KIP-Kuliah", date: "21 November 2026", status: "Info" },
              { title: "Sosialisasi Beasiswa Bank Indonesia 2026", date: "18 Oktober 2026", status: "Event" }
            ].map((pengumuman, idx) => (
              <div key={idx} className="p-5 bg-[#0f172a]/60 border border-slate-800 rounded-2xl hover:border-sky-500/30 transition-colors cursor-pointer flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">{pengumuman.title}</h4>
                  <p className="text-xs text-slate-500">{pengumuman.date}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  pengumuman.status === 'Penting' ? 'bg-red-500/10 text-red-400' : 
                  pengumuman.status === 'Info' ? 'bg-sky-500/10 text-sky-400' : 'bg-emerald-500/10 text-emerald-400'
                }`}>
                  {pengumuman.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Penerima Beasiswa 2025 */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
            <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400">🏆</span> 
            Penerima Beasiswa 2025
          </h2>
          <div className="bg-[#0f172a]/60 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -z-10"></div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Selamat kepada para mahasiswa yang telah berhasil lolos seleksi penerimaan beasiswa periode 2025. Silakan unduh untuk melihat daftar lengkap.
            </p>
            
            <div className="space-y-3">
              
              {/* TOMBOL UNDUH 1 (Menggunakan tag <a> dan atribut download) */}
              <a 
                // href="/sk-akademik-2025.pdf" 
                onClick={handleDownloadClick}
                // download="SK_Penerima_Beasiswa_Akademik_2025.pdf"
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all group cursor-pointer"
              >
                <span className="text-sm font-semibold text-slate-200">SK Penerima Beasiswa Akademik 2025.pdf</span>
                <span className="text-sky-400 group-hover:translate-x-1 transition-transform">Unduh &darr;</span>
              </a>

              {/* TOMBOL UNDUH 2 */}
              <a 
                // href="/sk-ekonomi-2025.pdf" 
                // download="SK_Penerima_Bantuan_Ekonomi_2025.pdf"
                onClick={handleDownloadClick}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all group cursor-pointer"
              >
                <span className="text-sm font-semibold text-slate-200">SK Penerima Bantuan Ekonomi 2025.pdf</span>
                <span className="text-sky-400 group-hover:translate-x-1 transition-transform">Unduh &darr;</span>
              </a>

            </div>
          </div>
        </div>

      </div>
      {/* ========================================== */}
      {/* POP-UP BESAR (MODAL) DI TENGAH LAYAR */}
      {/* ========================================== */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030712]/80 backdrop-blur-sm">
          
          <div className="bg-[#0f172a] border border-slate-700/80 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-md w-full text-center relative transform transition-all">
            
            {/* Ikon Gembok / Peringatan Besar */}
            <div className="w-24 h-24 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-sky-500/20">
              <svg className="w-12 h-12 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>

            {/* Teks Pesan */}
            <h3 className="text-3xl font-extrabold text-white mb-4">Akses Terkunci!</h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Pengumuman angkatan <span className="font-bold text-sky-400">2025</span> sudah ditutup.
            </p>

            {/* Tombol Tutup */}
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-bold py-4 px-6 rounded-2xl transition-all border border-slate-600 shadow-lg"
            >
              Mengerti & Tutup
            </button>
            
          </div>
          
        </div>
      )}
    </div>
  );
}