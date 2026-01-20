import React from 'react';
import { BadgeType } from '../types';

interface BadgeProps {
  type: BadgeType;
}

export const Badge: React.FC<BadgeProps> = ({ type }) => {
  let bgColor = 'bg-gray-500';
  
  switch (type) {
    case 'Hot':
      bgColor = 'bg-red-600';
      break;
    case 'Bán chạy':
      bgColor = 'bg-orange-500';
      break;
    case 'Giảm sâu':
      bgColor = 'bg-yellow-500';
      break;
    case 'Mới':
      bgColor = 'bg-blue-500';
      break;
  }

  return (
    <span className={`${bgColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-sm`}>
      {type}
    </span>
  );
};