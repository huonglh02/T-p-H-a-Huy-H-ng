import React from 'react';
import { Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
            <h4 className="text-white text-lg font-bold mb-2">Tạp Hóa Huy Hướng</h4>
            <p className="text-sm max-w-md mx-auto">
                Website chia sẻ các sản phẩm chất lượng, giá ưu đãi từ Shopee. 
                Chúng tôi không trực tiếp bán hàng.
            </p>
        </div>

        <div className="w-full h-px bg-gray-800 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs">
                &copy; {new Date().getFullYear()} Tạp Hóa Huy Hướng. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/huy.huong.896765" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                    <Facebook size={20} />
                </a>
                <a 
                  href="mailto:huonglh03@gmail.com" 
                  className="hover:text-white transition-colors"
                  aria-label="Email"
                >
                    <Mail size={20} />
                </a>
            </div>
        </div>
        
        <div className="mt-8 text-[10px] text-gray-600">
            <p>
                Disclaimer: Khi bạn click vào link và mua hàng, chúng tôi có thể nhận được một khoản hoa hồng nhỏ từ Shopee.
                Điều này không làm ảnh hưởng đến giá sản phẩm bạn mua.
            </p>
        </div>
      </div>
    </footer>
  );
};