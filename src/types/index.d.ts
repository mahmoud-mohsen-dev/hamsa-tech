export type NavItemKeyType = {
  categoryName: string;
  page: string;
  children: {
    subCategoryName: string;
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
