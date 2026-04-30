import React from 'react';
import { Play, ChevronDown } from 'lucide-react';

const BestStories = () => {
  const stories = [
    {
      title: 'Dinh Thự Câm Lặng',
      category: 'PSYCHOLOGICAL',
      duration: '45 Phút',
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Tiếng Bước Chân Thứ 5',
      category: 'URBAN LEGEND',
      duration: '32 Phút',
      img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Lời Nguyền Búp Bê',
      category: 'SUPERNATURAL',
      duration: '58 Phút',
      img: 'https://images.unsplash.com/photo-1582236371424-df3c9c916ab4?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Rừng Sát Nhân',
      category: 'FOLK HORROR',
      duration: '41 Phút',
      img: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Tần Số Chết',
      category: 'TECHNO HORROR',
      duration: '26 Phút',
      img: 'https://images.unsplash.com/photo-1626244199986-eecaa9f086cb?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Oan Hồn Dưới Cầu',
      category: 'MYTHOLOGY',
      duration: '52 Phút',
      img: 'https://images.unsplash.com/photo-1509232338270-b1a9e70198f3?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-cinematic font-bold uppercase mb-4">
          <span className="text-white">Truyện </span>
          <span className="text-blood-red">Hay</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
          Khám phá những câu chuyện kinh dị xuất sắc nhất, được tuyển chọn kỹ lưỡng để mang đến cho bạn những giây phút ám ảnh và rùng rợn đến nghẹt thở.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stories.map((story, i) => (
          <div key={i} className="group relative cursor-pointer hover-glow-red rounded overflow-hidden bg-dark-gray border border-gray-900 flex flex-col h-96">
            <div className="h-3/5 overflow-hidden">
              <img 
                src={story.img} 
                alt={story.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              />
            </div>
            <div className="h-2/5 p-5 flex flex-col justify-between bg-gradient-to-t from-black to-dark-gray">
              <div>
                <p className="text-blood-red text-xs font-bold uppercase tracking-widest mb-1">{story.category}</p>
                <h3 className="font-cinematic text-xl font-bold text-white line-clamp-2">{story.title}</h3>
              </div>
              <div className="flex justify-between items-center mt-2">
                <button className="bg-blood-red hover:bg-red-800 text-white px-4 py-2 text-xs font-bold uppercase rounded flex items-center gap-2 transition-colors">
                  <Play size={14} fill="currentColor" /> Nghe Ngay
                </button>
                <span className="text-xs text-gray-500">{story.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="flex items-center gap-2 border border-gray-700 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all">
          Xem Thêm Truyện <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default BestStories;
