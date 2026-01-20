import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { Badge } from './Badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercent = Math.round(
    ((product.priceOriginal - product.priceSale) / product.priceOriginal) * 100
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <a 
      href={product.affiliateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full"
    >
      {/* Image Container with Price Overlay */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Tag */}
        <div className="absolute top-0 right-0 bg-[#EE4D2D] text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10 shadow-sm">
          -{discountPercent}%
        </div>
        
        {/* Price Overlay on Image */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6 flex flex-col justify-end">
          <div className="flex items-baseline gap-2">
            <span className="text-yellow-400 text-lg sm:text-xl font-bold shadow-black drop-shadow-md">
              {formatCurrency(product.priceSale)}
            </span>
            <span className="text-gray-300 text-xs line-through opacity-90">
              {formatCurrency(product.priceOriginal)}
            </span>
          </div>
        </div>

        {/* Overlay on Desktop Hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Badges */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.badges.map((badge, idx) => (
            <Badge key={idx} type={badge} />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-gray-800 font-medium text-sm sm:text-base line-clamp-2 mb-3 flex-grow min-h-[40px]">
          {product.name}
        </h3>

        {/* Footer: Sold Count & CTA */}
        <div className="mt-auto flex items-center justify-between">
          {product.soldCount ? (
             <span className="text-gray-500 text-xs">Đã bán {product.soldCount > 1000 ? `${(product.soldCount/1000).toFixed(1)}k` : product.soldCount}</span>
          ) : <span></span>}
          
          <button className="bg-[#EE4D2D] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 group-hover:bg-[#d63d20] transition-colors shadow-sm">
            Mua Ngay
            <ShoppingBag size={12} />
          </button>
        </div>
      </div>
    </a>
  );
};