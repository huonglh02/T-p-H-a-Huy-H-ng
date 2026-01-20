import React from 'react';
import { Facebook, Mail } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#EE4D2D] text-white text-xs py-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden sm:inline text-white/90 font-medium">Liên hệ chúng tôi:</span>
            <a 
              href="https://www.facebook.com/huy.huong.896765" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
                <Facebook size={14} fill="currentColor" className="text-white/90" />
                <span>Huy Hướng</span>
            </a>
            <a 
              href="mailto:huonglh03@gmail.com" 
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
                <Mail size={14} className="text-white/90" />
                <span>huonglh03@gmail.com</span>
            </a>
        </div>
        <div className="text-white/90 font-medium hidden sm:block">
            Tạp Hóa Huy Hướng - Săn Deal Ngon Mỗi Ngày
        </div>
      </div>
    </div>
  );
};