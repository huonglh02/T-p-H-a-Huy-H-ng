import { Product, Category } from '../types';

// === CẤU HÌNH DANH MỤC ===
export const CATEGORIES: Category[] = [
  { id: 'all', label: 'Tất cả' },
  { id: 'tech', label: 'Công nghệ' },
  { id: 'fashion', label: 'Thời trang' },
  { id: 'home', label: 'Nhà cửa & Đời sống' },
  { id: 'beauty', label: 'Sắc đẹp' },
];

// === DANH SÁCH SẢN PHẨM (Sửa link affiliate tại đây) ===
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Tai nghe Bluetooth True Wireless Âm Bass Cực Căng',
    category: 'tech',
    priceOriginal: 550000,
    priceSale: 229000,
    image: 'https://picsum.photos/400/400?random=1',
    affiliateLink: 'https://shopee.vn/example-product-1',
    badges: ['Bán chạy', 'Giảm sâu'],
    soldCount: 1500
  },
  {
    id: '2',
    name: 'Áo Thun Unisex Cotton 100% Form Rộng Thoáng Mát',
    category: 'fashion',
    priceOriginal: 150000,
    priceSale: 79000,
    image: 'https://picsum.photos/400/400?random=2',
    affiliateLink: 'https://shopee.vn/example-product-2',
    badges: ['Hot'],
    soldCount: 890
  },
  {
    id: '3',
    name: 'Nồi Chiên Không Dầu 5L Công Nghệ Mới',
    category: 'home',
    priceOriginal: 1200000,
    priceSale: 850000,
    image: 'https://picsum.photos/400/400?random=3',
    affiliateLink: 'https://shopee.vn/example-product-3',
    badges: ['Giảm sâu'],
    soldCount: 430
  },
  {
    id: '4',
    name: 'Son Kem Lì Mịn Môi Lâu Trôi BlackRouge',
    category: 'beauty',
    priceOriginal: 280000,
    priceSale: 145000,
    image: 'https://picsum.photos/400/400?random=4',
    affiliateLink: 'https://shopee.vn/example-product-4',
    badges: ['Bán chạy', 'Hot'],
    soldCount: 5200
  },
  {
    id: '5',
    name: 'Chuột Không Dây Gaming Silent Pin Sạc',
    category: 'tech',
    priceOriginal: 300000,
    priceSale: 159000,
    image: 'https://picsum.photos/400/400?random=5',
    affiliateLink: 'https://shopee.vn/example-product-5',
    badges: ['Mới'],
    soldCount: 210
  },
  {
    id: '6',
    name: 'Bình Giữ Nhiệt Inox 304 Cao Cấp 500ml',
    category: 'home',
    priceOriginal: 180000,
    priceSale: 99000,
    image: 'https://picsum.photos/400/400?random=6',
    affiliateLink: 'https://shopee.vn/example-product-6',
    badges: ['Hot'],
    soldCount: 3300
  },
  {
    id: '7',
    name: 'Sạc Dự Phòng 20000mAh Sạc Nhanh 22.5W',
    category: 'tech',
    priceOriginal: 450000,
    priceSale: 299000,
    image: 'https://picsum.photos/400/400?random=7',
    affiliateLink: 'https://shopee.vn/example-product-7',
    badges: ['Giảm sâu'],
    soldCount: 600
  },
  {
    id: '8',
    name: 'Kệ Đa Năng 4 Tầng Có Bánh Xe Di Chuyển',
    category: 'home',
    priceOriginal: 350000,
    priceSale: 189000,
    image: 'https://picsum.photos/400/400?random=8',
    affiliateLink: 'https://shopee.vn/example-product-8',
    badges: ['Bán chạy'],
    soldCount: 900
  },
  {
    id: '9',
    name: 'Combo 3 Tất Vớ Cổ Cao Vintage Hàn Quốc',
    category: 'fashion',
    priceOriginal: 60000,
    priceSale: 25000,
    image: 'https://picsum.photos/400/400?random=9',
    affiliateLink: 'https://shopee.vn/example-product-9',
    badges: ['Hot'],
    soldCount: 12000
  }
];