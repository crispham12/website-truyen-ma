import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-horror-black">
      {/* Background with horror veins/roots effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509232338270-b1a9e70198f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-horror-black via-transparent to-horror-black"></div>
      
      <div className="relative z-10 w-full max-w-md p-8 bg-black/80 backdrop-blur-md border border-gray-900 rounded shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-cinematic font-bold text-white mb-2 tracking-tight">Mừng Trở Lại</h1>
          <p className="text-blood-red text-xs font-bold uppercase tracking-[0.2em]">Chuẩn bị nghi lễ của bạn</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
              Dấu Ấn Linh Hồn (Email)
            </label>
            <input 
              type="email" 
              placeholder="tu-si@huvu.com"
              className="w-full bg-dark-gray border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-blood-red transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
              Chìa Khóa Ẩn (Mật Khẩu)
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-dark-gray border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-blood-red transition-colors"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center text-gray-400 cursor-pointer">
              <input type="checkbox" className="mr-2 accent-blood-red bg-dark-gray border-gray-800" />
              <span>Giữ kết nối</span>
            </label>
            <Link to="#" className="text-blood-red hover:text-red-400 transition-colors uppercase tracking-wider font-bold">
              Quên Tâm Trí?
            </Link>
          </div>

          <button 
            type="button" 
            className="w-full bg-blood-red hover:bg-red-800 text-white py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all hover-glow-red mt-4"
          >
            Bước Vào Hư Vô
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-500 text-xs italic mb-4">Mới đến với cơn ác mộng?</p>
          <Link 
            to="/register" 
            className="block w-full border border-gray-700 hover:border-blood-red text-gray-300 hover:text-white py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors"
          >
            Triệu Hồi Tài Khoản
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
