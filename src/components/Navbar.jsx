import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md px-8 py-4 flex justify-between items-center transition-all duration-300 border-b border-gray-900">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-blood-red font-cinematic text-3xl font-bold tracking-widest uppercase">
          CrisStory
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
          <Link to="/" className="text-blood-red transition-colors border-b-2 border-blood-red pb-1">Trang Chủ</Link>
          <Link to="#" className="hover:text-blood-red transition-colors border-b-2 border-transparent hover:border-blood-red pb-1">Thể Loại</Link>
          <Link to="/best-stories" className="hover:text-blood-red transition-colors border-b-2 border-transparent hover:border-blood-red pb-1">Truyện Hay</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Tìm kiếm truyện..." 
            className="bg-dark-gray border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blood-red focus:ring-1 focus:ring-blood-red transition-all text-white placeholder-gray-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-300 hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">
            Đăng Nhập
          </Link>
          <Link to="/register" className="bg-blood-red hover:bg-red-800 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded transition-colors">
            Đăng Ký
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
