import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900 text-center">
      <h2 className="text-blood-red font-cinematic text-2xl font-bold tracking-widest uppercase mb-4">CriStory</h2>
      <p className="text-gray-500 text-xs font-semibold tracking-widest mb-6">© 2026 CriStory. BẢN QUYỀN THUỘC VỀ CriStory.</p>
      <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
        <Link to="#" className="text-gray-400 hover:text-blood-red transition-colors text-xs font-bold uppercase tracking-widest">ĐIỀU KHOẢN</Link>
        <Link to="#" className="text-gray-400 hover:text-blood-red transition-colors text-xs font-bold uppercase tracking-widest">BẢO MẬT</Link>
        <Link to="#" className="text-gray-400 hover:text-blood-red transition-colors text-xs font-bold uppercase tracking-widest">LIÊN HỆ</Link>
      </div>
    </footer>
  );
};

export default Footer;
