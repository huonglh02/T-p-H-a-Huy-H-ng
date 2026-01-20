export type BadgeType = 'Hot' | 'Bán chạy' | 'Giảm sâu' | 'Mới';

export interface Product {
  id: string;
  name: string;
  category: string;
  priceOriginal: number;
  priceSale: number;
  image: string;
  affiliateLink: string;
  badges: BadgeType[];
  soldCount?: number; // Optional: e.g., "Đã bán 1.2k"
}

export interface Category {
  id: string;
  label: string;
}