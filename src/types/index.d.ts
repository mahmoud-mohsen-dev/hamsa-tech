export type NavItemKeyType = {
  key: string;
  categoryName: string;
  page: string;
  children: {
    subCategoryName: string;
    key: string;
    imgSrc: string;
    page: string;
  }[];
};

export interface NavItemType {
  products: NavItemKeyType[];
  branches: NavItemKeyType[];
  blog: NavItemKeyType[];
  aboutUs: NavItemKeyType[];
  support: NavItemKeyType[];
}

export interface productType {
  id: string;
  productName: string;
  totalNumberOfRates: number;
  averageRate: number;
  imgSrc: string;
  alt: string;
  priceBeforeDeduction: number;
  currentPrice: number;
  badge: '' | 'Hot' | 'Out Of Stock' | 'Limited' | 'Sale' | 'New';
}

export type productsType = {
  subCategoryName: string;
  imgSrc: string;
  children: productType[];
}[];
