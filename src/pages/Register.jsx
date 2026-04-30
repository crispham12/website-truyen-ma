import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center relative overflow-hidden bg-horror-black">
      {/* Subtle red ambient glow in background */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blood-red/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-black/90 border border-gray-900 rounded-lg shadow-2xl mb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-cinematic font-bold text-white mb-2">Đăng Ký</h1>
          <p className="text-gray-400 text-sm">Tạo tài khoản để thưởng thức những câu chuyện rùng rợn nhất.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
              Tên Người Dùng
            </label>
            <input
              type="text"
              placeholder="Tên của bạn"
              className="w-full bg-dark-gray/50 border border-gray-800 text-gray-300 px-4 py-3 focus:outline-none focus:border-blood-red focus:bg-dark-gray transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
              Địa Chỉ Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full bg-dark-gray/50 border border-gray-800 text-gray-300 px-4 py-3 focus:outline-none focus:border-blood-red focus:bg-dark-gray transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
              Mật Khẩu
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-dark-gray/50 border border-gray-800 text-gray-300 px-4 py-3 focus:outline-none focus:border-blood-red focus:bg-dark-gray transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
              Xác Nhận Mật Khẩu
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-dark-gray/50 border border-gray-800 text-gray-300 px-4 py-3 focus:outline-none focus:border-blood-red focus:bg-dark-gray transition-colors"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blood-red hover:bg-red-800 text-white py-3 mt-4 text-sm font-bold uppercase tracking-wider rounded transition-all hover-glow-red"
          >
            Đăng Ký Ngay
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <div className="w-1/3 h-px bg-gray-800"></div>
          <span className="px-4 text-gray-600 text-xs uppercase">Hoặc</span>
          <div className="w-1/3 h-px bg-gray-800"></div>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-500 text-xs uppercase mr-2">Đã có tài khoản?</span>
          <Link to="/login" className="text-blood-red hover:text-red-400 text-xs font-bold uppercase transition-colors">
            Đăng nhập ngay
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md h-32 rounded-lg overflow-hidden border border-gray-900 group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"
          alt="Abyss"
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        </div>
      </div>
    </div>
  );
};

export default Register;
