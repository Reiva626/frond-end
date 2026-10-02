import React from 'react';

// Pastikan ada tulisan "export default" di sini!
export default function Footer() {
  return (
    <footer className="bg-[#02040a] border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
            Vercel <span className="text-white">institution</span>
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            Pusat layanan beasiswa terpadu. Berkomitmen untuk mewujudkan generasi emas melalui beasiswa yang inklusif dan berkualitas.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500/20 hover:text-sky-400 cursor-pointer transition-colors">in</span>
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500/20 hover:text-sky-400 cursor-pointer transition-colors">tw</span>
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-sky-500/20 hover:text-sky-400 cursor-pointer transition-colors">ig</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-300 mb-4">Tautan Penting</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li className="hover:text-sky-400 cursor-pointer transition-colors">Syarat & Ketentuan</li>
            <li className="hover:text-sky-400 cursor-pointer transition-colors">Panduan Pendaftaran</li>
            <li className="hover:text-sky-400 cursor-pointer transition-colors">FAQ Beasiswa</li>
            <li className="hover:text-sky-400 cursor-pointer transition-colors">Hubungi Helpdesk</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-300 mb-4">Pusat Bantuan</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>Gedung Rektorat Lt. 3</li>
            <li>Jl. Salemba Raya, Kota Jakarta</li>
            <li>Email: beasiswa@nexus.ac.id</li>
            <li>Telp: (021) 555-0199</li>
          </ul>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
        &copy; 2026 Vercel institution Scholarship Portal. All rights reserved.
      </div>
    </footer>
  );
}