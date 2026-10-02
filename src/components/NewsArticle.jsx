
// ------>>>> Fase 3


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function NewsArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Struktur data baru: Menggunakan contentBlocks untuk menggabungkan teks panjang dan banyak foto
  const articles = {
    "1": {
      title: "Peluncuran Program Beasiswa Generasi Emas 2026",
      date: "25 September 2026",
      author: "Vercel",
      mainImg: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contentBlocks: [
        { type: "text", value: "Lembaga resmi meluncurkan program beasiswa penuh untuk 500 calon mahasiswa berprestasi. Program ini bertujuan untuk memberikan akses pendidikan yang lebih luas bagi siswa yang memiliki potensi akademik dan non-akademik luar biasa di tengah tantangan ekonomi global saat ini." },
        { type: "text", value: "Pemimpin Vercel institution dalam pidato peluncurannya menegaskan bahwa Generasi Emas 2026 bukan sekadar bantuan finansial, melainkan program pembinaan komprehensif. Para penerima beasiswa akan mendapatkan pendampingan mentor, pelatihan kepemimpinan, dan akses ke jaringan alumni internasional." },
        { type: "image", value: "/images.jpeg" },
        { type: "text", value: "Pendaftaran akan dibuka mulai awal bulan depan dan seluruh proses seleksi akan dilakukan secara transparan melalui portal VercelEdu ini. Harap siapkan data untuk melakukan pendaftaran." },
        { type: "text", value: "Selain itu, terdapat tahapan seleksi baru tahun ini, yaitu Focus Group Discussion (FGD). Tahapan ini dirancang untuk menilai kemampuan kolaborasi, pemecahan masalah, dan empati sosial dari para calon penerima beasiswa saat dihadapkan pada studi kasus nyata." },
        // { type: "image", value: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { type: "text", value: "Kami menghimbau seluruh calon pendaftar untuk mulai mempersiapkan diri dan terus memantau pengumuman di portal ini. Jangan ragu untuk menghubungi layanan bantuan (Chat admin) jika mengalami kendala teknis saat proses pendaftaran berlangsung." }
      ]
    },
    // "2": {
    //   title: "Tips dan step by step untuk daftar beasiswa di lembaga Vercel",
    //   date: "22 September 2026",
    //   author: "Biro Kemahasiswaan",
    //   mainImg: "https://images.pexels.com/photos/159539/science-chemistry-research-159539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   contentBlocks: [
    //     { type: "text", value: "Pasti di bayanganmu daftar beasiswa itu langsung disuruh scan KTP, Kartu Keluarga, legalisir ijazah, sampai bikin esai berlembar-lembar, kan? Tenang, buang jauh-jauh pikiran itu. Kenyataannya, langkah awal mendaftar beasiswa itu jauh lebih simpel dan sama sekali nggak butuh dokumen berat. Biar kamu nggak pusing dan bebas drama, yuk ikuti 3 langkah awal ini dulu. Super gampang, kok!" },

    //     { type: "text", value: "" },
    //     // { type: "image", value: "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    //     { type: "text", value: "Langkah 1: Bikin Akun dan Login Gerbang Pertama Hal pertama yang wajib kamu lakukan adalah mendaftarkan dirimu di website atau portal resmi beasiswa tersebut. Jangan mikirin syarat macem-macem dulu, tugasmu di tahap ini cuma satu: punya akun. Siapkan email aktif yang sering kamu buka (jangan pakai email alay, ya!). Buat password yang gampang diingat tapi aman. Lakukan verifikasi akun lewat email, lalu login ke dalam dashboard pendaftaran. Selesai! Satu beban pikiranmu sudah hilang." },


    //     { type: "text", value: "Untuk mempercepat proses verifikasi, pastikan slip gaji orang tua atau surat keterangan tidak mampu (SKTM) dari kelurahan sudah dilegalisir basah dan di-scan dengan resolusi yang jelas. Dokumen yang buram dapat mengakibatkan penolakan otomatis oleh sistem." },
    //     // { type: "image", value: "https://images.pexels.com/photos/6959999/pexels-photo-6959999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    //     { type: "text", value: "Tim verifikator kami akan melakukan survei lapangan secara acak untuk memastikan bantuan tepat sasaran. Mari manfaatkan kesempatan ini sebaik-baiknya untuk meringankan beban keluarga dan kembali fokus pada pencapaian akademik." }
    //   ]
    // },

    "2": {
  title: "Panduan Anti-Pusing: Step-by-Step Siapkan Berkas Beasiswa Tanpa Drama",
  date: "22 September 2026",
  author: "Biro Kemahasiswaan",
  // mainImg: "https://images.pexels.com/photos/159539/science-chemistry-research-159539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  mainImg : "/dokumen.jpeg",
  contentBlocks: [
    { 
      type: "text", 
      value: "Banyak calon pendaftar beasiswa yang sudah mundur duluan sebelum mencoba. Alasannya satu: Overthinking memikirkan tumpukan dokumen! Pasti di bayanganmu daftar beasiswa itu langsung disuruh scan KTP, Kartu Keluarga, legalisir ijazah, sampai bikin esai berlembar-lembar, kan? Tenang, buang jauh-jauh pikiran itu. Kenyataannya, langkah awal mendaftar beasiswa itu jauh lebih simpel dan sama sekali nggak butuh dokumen berat. Biar kamu nggak pusing dan bebas drama, yuk ikuti 3 langkah awal ini dulu." 
    },
    { 
      type: "text", 
      value: "Langkah 1: Bikin Akun dan Login. Hal pertama yang wajib kamu lakukan adalah mendaftarkan dirimu di website atau portal resmi beasiswa tersebut. Jangan mikirin syarat macem-macem dulu, tugasmu di tahap ini cuma satu: punya akun. Siapkan email aktif yang sering kamu buka. Buat password yang gampang diingat tapi aman. Lakukan verifikasi akun lewat email, lalu login ke dalam dashboard pendaftaran. Selesai! Satu beban pikiranmu sudah hilang." 
    },
    { 
      type: "text", 
      value: "Langkah 2: Isi Formulir Pendaftaran Dasar. Setelah berhasil login, kamu akan dihadapkan pada formulir online. Ingat, di tahap ini kamu hanya diminta mengisi data diri dasar, bukan mengunggah dokumen tebal. Isi nama lengkap sesuai identitas, asal sekolah atau kampus, dan nomor WhatsApp yang aktif. Kuncinya di sini adalah ketelitian. Pastikan tidak ada typo (salah ketik) saat memasukkan alamat email atau nomor HP, karena ini adalah jalur utama panitia menghubungimu. Jika sudah terisi, klik Submit!" 
    },
    { 
      type: "text", 
      value: "Langkah 3: Amankan Tiket Aksesmu. Nah, ini dia bagian paling serunya! Setelah kamu berhasil menyetor formulir pendaftaran, cek inbox atau folder spam di email kamu. Panitia biasanya akan langsung mengirimkan email konfirmasi yang berisi tautan penting: Link Discord (atau grup komunitas) untuk saling berdiskusi, dan Link Zoom Sosialisasi. Di sesi Zoom inilah nantinya panitia akan menjelaskan secara pelan-pelan dokumen apa saja yang 'nanti' perlu disiapkan." 
    },
    { 
      type: "text", 
      value: "Gampang banget, kan? Ternyata langkah awalnya sama sekali nggak horor. Kamu nggak perlu pusing mikirin berkas administrasi sekarang, yang penting nama kamu sudah terdaftar di sistem. Urusan dokumen kelengkapan bisa dipikirkan nanti setelah kamu ikut sesi Zoom-nya. Yuk, jangan tunda lagi. Buka website pendaftarannya sekarang dan sampai jumpa di grup Discord!" 
    }
  ]
},
    
    "3": {
      title: "Panduan Lolos Wawancara dari Alumni",
      date: "19 September 2026",
      author: "Ikatan Organisasi Vercel",
      mainImg: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      contentBlocks: [
        // { type: "text", value: "Simak tips dan trik jitu dari para penerima beasiswa tahun lalu tentang bagaimana menaklukkan sesi wawancara yang seringkali menjadi momok paling menakutkan bagi para pendaftar." },
        // { type: "text", value: "Pertama, pelajari visi dan misi kampus serta tujuan spesifik dari program beasiswa yang Anda lamar. Pewawancara ingin melihat sejauh mana nilai-nilai personal Anda selaras dengan arah pergerakan institusi." },
        // { type: "image", value: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        // { type: "text", value: "Kedua, gunakan metode STAR (Situation, Task, Action, Result) saat menjawab pertanyaan berbasis pengalaman. Jelaskan situasi yang Anda hadapi, tugas yang harus diselesaikan, tindakan nyata yang Anda ambil, dan hasil positif yang dicapai. Ini membuat jawaban Anda terstruktur dan meyakinkan." },
        // { type: "text", value: "Ketiga, perhatikan bahasa tubuh dan etika digital. Karena wawancara akan dilakukan secara daring via Zoom Meeting, pastikan Anda menatap lensa kamera (bukan layar) saat berbicara untuk memberikan kesan kontak mata yang kuat." },
        // { type: "image", value: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        // { type: "text", value: "Terakhir, pastikan koneksi internet Anda stabil, gunakan pencahayaan yang cukup dari arah depan, dan masuklah ke ruang tunggu virtual 15 menit lebih awal. Ketenangan Anda di menit-menit awal akan sangat menentukan sisa jalannya wawancara. Semoga berhasil!" }

        { type: "text", value: "Selamat bagi para kandidat yang telah lolos tahap seleksi dokumen! Tahap krusial selanjutnya yang akan menentukan langkah Anda adalah sesi wawancara. Banyak kandidat menganggap sesi ini sebagai interogasi, padahal ini adalah ruang diskusi terbuka bagi kami untuk mengenal potensi asli Anda lebih dalam." },
        { type: "text", value: "Sebagai tim penilai, kami tidak mencari kesempurnaan. Kami mencari kejujuran, kegigihan, dan keselarasan visi. Kesalahan fatal yang paling sering kami temukan adalah kandidat yang memberikan jawaban hafalan atau 'template' klise yang mereka anggap ingin kami dengar. Jadilah autentik dan jadilah diri sendiri." },
        // { type: "image", value: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { type: "text", value: "Persiapan paling mendasar yang wajib Anda lakukan adalah riset mendalam. Pahami betul nilai-nilai utama dari institusi kami. Saat wawancara, Anda harus mampu menjelaskan benang merah antara minat studi Anda, rencana karir masa depan, dan bagaimana beasiswa ini akan menjadi jembatan untuk mencapai hal tersebut." },
        { type: "text", value: "Saat merespon pertanyaan berbasis studi kasus atau pemecahan masalah, hindari jawaban yang mengambang. Jelaskan secara terstruktur: Apa akar masalahnya? Apa peran atau tanggung jawab Anda saat itu? Tindakan nyata apa yang Anda eksekusi? Dan pelajaran berharga apa yang Anda petik dari hasilnya." },
        { type: "image", value: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { type: "text", value: "Mengingat wawancara akan dilangsungkan secara daring, aspek teknis mencerminkan kesiapan mental Anda. Pastikan latar belakang video Anda rapi, pencahayaan wajah terang, dan audio tidak terganggu suara bising. Hadirlah di ruang tunggu virtual 10 menit lebih awal untuk mengatur napas dan ketenangan." },
        { type: "text", value: "Terakhir, ketika kami memberikan kesempatan bertanya di akhir sesi, gunakanlah. Pertanyaan yang berbobot menunjukkan antusiasme dan pemikiran kritis Anda terhadap program ini. Persiapkan diri Anda sebaik mungkin, kami menantikan diskusi yang luar biasa bersama Anda!" }
      ]
    }
  };

  const article = articles[id];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl">Artikel tidak ditemukan.</h1>
        <button onClick={() => navigate('/')} className="ml-4 text-sky-400 underline">Kembali</button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen relative z-10 selection:bg-sky-500/30">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Tombol Kembali */}
        <button onClick={() => navigate('/')} className="text-sky-400 flex items-center gap-2 mb-8 hover:text-sky-300 transition-colors font-medium">
          <span>&larr;</span> Kembali ke Beranda
        </button>

        {/* Header Artikel */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-400">
            <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{article.date}</span>
            <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20">Oleh: {article.author}</span>
          </div>
        </div>

        {/* Kontainer Utama Artikel */}
        <div className="bg-[#0f172a]/80 border border-slate-700/50 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Gambar Utama (Hero) */}
          <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
            {/* Gradasi gelap di bagian bawah gambar agar menyatu dengan latar belakang */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10"></div>
            <img src={article.mainImg} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Isi Artikel Panjang */}
          <div className="p-8 md:p-14 relative z-20 -mt-10">
            {article.contentBlocks.map((block, index) => {
              
              // Jika tipe blok adalah teks
              if (block.type === 'text') {
                return (
                  <p key={index} className="text-slate-300 text-lg leading-relaxed mb-6 font-medium text-justify">
                    {block.value}
                  </p>
                );
              } 
              
              // Jika tipe blok adalah gambar tambahan
              else if (block.type === 'image') {
                return (
                  <div key={index} className="my-10 rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-black">
                    <img src={block.value} alt="Ilustrasi Tambahan" className="w-full h-auto object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700" />
                  </div>
                );
              }
              return null;
            })}

            {/* Bagian Penutup & Bagikan Artikel */}
            <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-slate-500 text-sm font-semibold">Berita resmi portal VercelEdu</p>
               <button onClick={() => navigate('/')} className="text-sky-400 hover:text-white transition-colors bg-white/5 border border-white/10 hover:bg-sky-500 hover:border-sky-500 px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg">
                 Kembali ke beranda
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}