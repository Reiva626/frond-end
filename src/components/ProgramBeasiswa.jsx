import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProgramBeasiswa() {
  const navigate = useNavigate();
  
  // State untuk mengontrol Modal & Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({ nama: '', nim: '' });

  // Fungsi membuka modal
  const handleBukaModal = (namaProgram) => {
    setSelectedProgram(namaProgram);
    setIsModalOpen(true);
  };

  // Fungsi Submit Form ke Flask
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payloadData = {
      nama: formData.nama,
      nim: formData.nim,
      program: selectedProgram
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/daftar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadData)
      });
      
      const data = await response.json();
      
      if(data.status === 'success') {
        alert('🎉 BERHASIL: ' + data.pesan);
        setIsModalOpen(false);
        setFormData({ nama: '', nim: '' });
        
        // Pindah ke halaman formulir React setelah sukses
        navigate('/formulir'); 
      } else {
        alert('❌ GAGAL: ' + data.pesan);
      }
    } catch (error) {
      alert('⚠️ TERJADI KESALAHAN JARINGAN!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      
      {/* Efek Cahaya Organik di Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-float-1"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-sky-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-float-2"></div>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 pt-20 pb-24 px-6">
          <div className="text-center max-w-4xl mx-auto mb-24">
              <div className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 font-medium text-sm mb-6 backdrop-blur-md">
                  Pendaftaran Beasiswa 2026 Dibuka ✨
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
                  Masa Depanmu, <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Dimulai Dari Sini.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                  Pilih jalur beasiswa yang sesuai dengan potensimu. Kami siap mendukung perjalanan akademikmu tanpa batasan.
              </p>
          </div>

          {/* Grid Cards (Fluid Design) */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div onClick={() => handleBukaModal('Beasiswa Prestasi Akademik')} className="fluid-card rounded-[2.5rem] p-8 flex flex-col group cursor-pointer">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/5">🚀</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Prestasi Akademik</h3>
                  <p className="text-gray-400 flex-grow mb-8 leading-relaxed">Bantuan pendidikan penuh bagi siswa dengan performa akademik unggul.</p>
                  <div className="flex items-center text-sky-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                      
                      
                  </div>
              </div>

              <div onClick={() => handleBukaModal('Beasiswa Bakat & Olahraga')} className="fluid-card rounded-[2.5rem] p-8 flex flex-col group cursor-pointer">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/5">🏆</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Bakat & Olahraga</h3>
                  <p className="text-gray-400 flex-grow mb-8 leading-relaxed">Dukungan khusus untuk mahasiswa berprestasi di bidang non-akademik.</p>
                  <div className="flex items-center text-sky-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                      
                      
                  </div>
              </div>

              <div onClick={() => handleBukaModal('Beasiswa Bantuan Ekonomi')} className="fluid-card rounded-[2.5rem] p-8 flex flex-col group cursor-pointer">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/5">💡</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Bantuan Ekonomi</h3>
                  <p className="text-gray-400 flex-grow mb-8 leading-relaxed">Keringanan UKT bagi mahasiswa yang membutuhkan dukungan finansial.</p>
                  <div className="flex items-center text-sky-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                      
                      
                  </div>
              </div>
          </div>
      </div>

      

    </div>
  );
}