import React from 'react';
import { Play } from 'lucide-react';

const Home = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-forest-dark bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-horror-black/50 to-horror-black"></div>
        <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
          <p className="text-blood-red font-bold tracking-[0.3em] text-sm mb-4 uppercase">Trải Nghiệm Kể Chuyện Độc Quyền</p>
          <h1 className="text-6xl md:text-8xl font-cinematic font-bold text-white mb-8 tracking-tighter uppercase italic drop-shadow-2xl">
            Tiếng Thì Thầm Trong Đêm
          </h1>
          <div className="flex gap-6">
            <button className="bg-blood-red hover:bg-red-800 text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover-glow-red">
              <Play size={20} fill="currentColor" /> Nghe Ngay
            </button>
            <button className="bg-transparent border border-gray-600 hover:border-white text-white px-8 py-4 font-bold uppercase tracking-wider transition-all">
              Xem Trailer
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50">
          <span className="text-xs tracking-[0.2em] mb-2">BƯỚC VÀO</span>
          <div className="h-12 w-px bg-gradient-to-b from-blood-red to-transparent"></div>
        </div>
      </section>

      {/* Latest Manifestations */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-cinematic font-bold mb-2">Truyện Mới Cập Nhật</h2>
            <p className="text-gray-400 text-sm italic">Thưởng thức những tác phẩm kinh dị audio xuất sắc nhất.</p>
          </div>
          <button className="text-blood-red text-sm uppercase font-bold hover:text-white transition-colors">
            Xem Tất Cả →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Di Sản Của Gác Xép", ep: "TẬP MỚI", img: "https://images.unsplash.com/photo-1582236371424-df3c9c916ab4?q=80&w=400&auto=format&fit=crop" },
            { title: "Tiếng Vọng Khu 13", ep: "ĐANG CẬP NHẬT", img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=400&auto=format&fit=crop" },
            { title: "Chìa Khóa Sắt", ep: "TẬP MỚI", img: "https://images.unsplash.com/photo-1588040683617-74400ecad5ab?q=80&w=400&auto=format&fit=crop" },
            { title: "Cây Cầu Vô Định", ep: "TẬP MỚI", img: "https://images.unsplash.com/photo-1509232338270-b1a9e70198f3?q=80&w=400&auto=format&fit=crop" }
          ].map((item, i) => (
            <div key={i} className="group relative cursor-pointer hover-glow-red rounded overflow-hidden bg-dark-gray border border-gray-900">
              <div className="absolute top-2 left-2 z-20 bg-blood-red text-xs font-bold px-2 py-1 uppercase">{item.ep}</div>
              <img src={item.img} alt={item.title} className="w-full h-80 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 card-overlay flex flex-col justify-end p-6">
                <h3 className="font-cinematic text-2xl font-bold uppercase italic text-center leading-tight mb-4">{item.title}</h3>
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full border border-blood-red flex items-center justify-center text-blood-red group-hover:bg-blood-red group-hover:text-white transition-colors">
                    <Play size={16} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Fears */}
      <section className="px-8 py-16 bg-dark-gray border-y border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-cinematic font-bold mb-8 border-b border-gray-800 pb-4">Nỗi Sợ Thịnh Hành</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Gã Đàn Ông Mỉm Cười", rank: "01", img: "https://images.unsplash.com/photo-1626244199986-eecaa9f086cb?q=80&w=400&auto=format&fit=crop" },
              { title: "Chiếc Gương Nửa Đêm", rank: "02", img: "https://images.unsplash.com/photo-1510166089176-b57564a5b785?q=80&w=400&auto=format&fit=crop" },
              { title: "Hộp Nhạc", rank: "03", img: "https://images.unsplash.com/photo-1594958611187-57ed410ebc2d?q=80&w=400&auto=format&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="relative group cursor-pointer border border-gray-800 hover:border-blood-red transition-colors">
                <div className="absolute top-4 right-4 z-20 text-5xl font-cinematic font-bold text-blood-red opacity-50 italic">{item.rank}</div>
                <div className="h-96 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 card-overlay flex flex-col justify-end items-center p-6">
                    <h3 className="font-cinematic text-2xl font-bold uppercase italic mb-2">{item.title}</h3>
                    <div className="text-xs text-gray-400 mb-4 flex gap-4">
                      <span>👁 1.2M</span>
                      <span>⏱ 45m</span>
                    </div>
                    <button className="w-full bg-black/80 hover:bg-blood-red text-white py-3 text-xs font-bold uppercase tracking-widest border border-gray-800 hover:border-blood-red transition-all">
                      Nghe Ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="relative py-24 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex justify-center">
          <div className="bg-dark-gray/80 backdrop-blur-sm border-l-4 border-blood-red p-10 max-w-2xl w-full text-center">
            <p className="text-blood-red text-xs font-bold tracking-widest uppercase mb-4">Sắp Ra Mắt</p>
            <h3 className="text-5xl font-cinematic font-bold uppercase italic mb-6">Truyện Mới Nửa Đêm</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed italic">
              Đón chờ những câu chuyện kinh dị mới sắp được phát hành trên nền tảng.
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">04</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Ngày</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">12</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Giờ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">45</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Phút</div>
              </div>
            </div>
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors">
              Nhận Thông Báo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
