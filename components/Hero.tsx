import React from 'react';
import { CheckCircle, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#FFF5F1] to-white py-16 sm:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-50 rounded-full blur-2xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-[#EE4D2D] px-3 py-1 rounded-full text-xs font-semibold mb-6 shadow-sm">
          <CheckCircle size={14} />
          Link Sản Phẩm Chính Hãng
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Deal Ngon Mỗi Ngày <br />
          <span className="text-[#EE4D2D]">Mua Đúng Giá, Đúng Chỗ</span>
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          Chào mừng đến với <strong>Tạp Hóa Huy Hướng</strong>. Nơi tổng hợp các sản phẩm chất lượng, giảm giá sâu và được chọn lọc kỹ càng.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToCatalog}
            className="w-full sm:w-auto bg-[#EE4D2D] hover:bg-[#d63d20] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Xem Deal Hot Hôm Nay
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};