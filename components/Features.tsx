import React from 'react';
import { Check, Zap, Tag, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#EE4D2D]" />,
      title: "Link Chính Hãng",
      description: "Chỉ chia sẻ link từ Shopee Mall hoặc Shop Yêu Thích uy tín."
    },
    {
      icon: <Tag className="w-8 h-8 text-[#EE4D2D]" />,
      title: "Giá Giảm Thật",
      description: "So sánh lịch sử giá, đảm bảo không có tình trạng tăng giá ảo."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#EE4D2D]" />,
      title: "Cập Nhật Hằng Ngày",
      description: "Deal mới được update liên tục mỗi ngày, không sợ hết hạn."
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">
          Tại sao nên săn deal tại đây?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-orange-50/50 hover:bg-orange-50 transition-colors">
              <div className="mb-4 bg-white p-3 rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};