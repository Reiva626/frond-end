import React from 'react';

export default function LinkZoom() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Banner Sukses */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 mb-8 flex items-center gap-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Data Diri Berhasil Disimpan!</h3>
            <p className="text-sm text-emerald-200/70">Langkah pendaftaran administratif telah selesai. Persiapkan diri Anda untuk tahap wawancara.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Kolom Kiri: Jadwal & Link Discord */}
          <div className="space-y-6">
            
            {/* Kartu Zoom */}
            <div className="bg-[#0f172a]/80 border border-slate-700/50 p-6 rounded-3xl shadow-2xl backdrop-blur-md">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-500/20 rounded-lg text-blue-400">📹</span> Jadwal Wawancara Zoom
              </h4>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 text-sm">Tanggal</span>
                  <span className="text-white font-medium text-sm">Kamis, 22 Oktober 2026</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 text-sm">Waktu</span>
                  <span className="text-white font-medium text-sm">10:00 WIB - Selesai</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400 text-sm">Meeting ID</span>
                  <span className="text-white font-medium text-sm">823 4567 8901</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-slate-400 text-sm">Passcode</span>
                  <span className="text-white font-medium text-sm">VERCEL2026</span>
                </div>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
              onClick={() => alert('Zoom meeting di mulai pada tanggal 12 Oktober 2026')}
              >
                Buka Zoom Meeting
              </button>
            </div>

            {/* Kartu Discord */}
            <div className="bg-[#0f172a]/80 border border-slate-700/50 p-6 rounded-3xl shadow-2xl backdrop-blur-md">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="p-2 bg-[#5865F2]/20 rounded-lg text-[#5865F2]">💬</span> Grup Komunikasi Resmi
              </h4>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Bergabunglah ke server Discord resmi kami untuk mendapatkan pengumuman *real-time* dan berdiskusi dengan sesama calon penerima beasiswa.
              </p>
              <button className="w-full bg-[#ff0000] hover:bg-[#ee817d] text-white font-bold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(88,101,242,0.4)] transition-all"
                    onClick={() => alert('Group discord belum dibuka!!!')}
              >
                Join Discord Server
              </button>
            </div>

          </div>

          {/* Kolom Kanan: Profil Pewawancara */}
          <div className="bg-[#0f172a]/80 border border-slate-700/50 p-6 rounded-3xl shadow-2xl backdrop-blur-md flex flex-col items-center justify-center text-center h-full">
            <h4 className="text-lg font-bold text-white mb-8 w-full text-left flex items-center gap-2">
              <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400">👤</span> Informasi Pewawancara
            </h4>
            
            {/* Foto Dosen (Menggunakan API gambar placeholder profesional) */}
            <div className="relative w-32 h-32 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-full animate-spin-slow blur-md opacity-50"></div>
              <img 
                // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                src='DOSEN-MM-2.jpg'
                alt="Foto Dosen" 
                className="relative w-full h-full object-cover rounded-full border-2 border-[#0f172a] shadow-xl"
              />
              
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1">Dr. Hendra Wei Kusuma, S.T., M.Sc., Ph.D.</h3>
            <p className="text-sky-400 font-medium text-sm mb-4">Ketua Program Beasiswa</p>
            
            <div className="bg-[#030712]/50 p-4 rounded-xl border border-white/5 w-full">
              <p className="text-sm text-slate-400 leading-relaxed">
                "Hadirilah di ruang tunggu virtual (waiting room) setidaknya 15 menit sebelum jadwal wawancara Anda dimulai. Keterlambatan tanpa konfirmasi akan menjadi catatan khusus bagi tim penilai. Selama wawancara, pertahankan kontak mata dengan menatap langsung ke arah lensa kamera, bukan ke layar."
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}