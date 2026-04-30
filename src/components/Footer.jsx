import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900 text-center">
      <h2 className="text-blood-red font-cinematic text-2xl font-bold tracking-widest uppercase mb-4">Eldritch</h2>
      <p className="text-xs text-gray-600 mb-8">© 2024 ELDRITCH NARRATIVES. ÔM TRỌN BÓNG TỐI.</p>
      <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
        <a href="#" className="hover:text-blood-red transition-colors">Chính Sách Bảo Mật</a>
        <a href="#" className="hover:text-blood-red transition-colors">Cốt Truyện</a>
        <a href="#" className="hover:text-blood-red transition-colors">Liên Hệ</a>
      </div>
    </footer>
  );
};

export default Footer;
