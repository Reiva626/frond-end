
import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate

export default function News() {
  const navigate = useNavigate(); // <-- Aktifkan fungsi pindah halaman

  const newsData = [
    {
      id: 1, 
      title: "Peluncuran Program Beasiswa Generasi Emas 2026",
      date: "25 September 2026",
      desc: "Lembaga Vercel resmi meluncurkan program beasiswa penuh untuk 500 orang berprestasi",
      // Ganti link ini
      img: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2, 
      title: "Panduan Anti-Pusing: Step-by-Step Siapkan Berkas Beasiswa Tanpa Drama",
      date: "22 September 2026",
      desc: "Panduan untuk memulai mendapatkan beasiswa dari Vercel institution dan universitas apa saja yang bekerja sama dengan Vercel institution",
      // Ganti link ini
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop"
    },
    {
      id: 3, 
      title: "Panduan Lolos Wawancara",
      date: "19 September 2026",
      desc: "Simak tips dan trik jitu dari para penerima beasiswa tahun lalu tentang bagaimana menaklukkan sesi wawancara.",
      // Ganti link ini
      img: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-white mb-4">Berita & Artikel</h2>
          <p className="text-slate-400">Informasi terbaru seputar program beasiswa</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mapping Data Berita */}
          {newsData.map((item) => (
            <div 
              key={item.id} 
              // PERINTAH PINDAH HALAMAN KETIKA DIKLIK
              onClick={() => navigate(`/news/${item.id}`)}
              className="bg-[#0f172a]/60 border border-slate-800 rounded-3xl overflow-hidden hover:border-sky-500/50 transition-all cursor-pointer group hover:-translate-y-2 shadow-lg flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sky-400 text-xs font-bold mb-3">{item.date}</p>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">{item.desc}</p>
                
                <span className="text-sky-400 text-sm font-semibold group-hover:translate-x-2 transition-transform flex items-center gap-1">
                  Baca Selengkapnya <span>&rarr;</span>
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}