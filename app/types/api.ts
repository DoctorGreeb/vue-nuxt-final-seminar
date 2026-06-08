export interface Product {
  id: number;
  name: string;
  Product_name?: string;
  description?: string;
  price: number;
  images?: string[];
  brand?: string;
  characteristics: Characteristic[];
  color?: string;
  is_available?: boolean;
  categoryId?: number;
  subcategoryId?: number;
  createdAt?: string;
  updatedAt?: string;
  category?: string;
  discount_price?: number;
}

export interface Characteristic {
  value: string | number;
  unit_type: string;
  characteristic?: string;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  slug?: string;
  parentId?: number;
  image?: string;
}

export interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
  description?: string;
  slug?: string;
}

export type ProductsResponse = Product[];
export type ProductResponse = Product;
export type CategoryResponse = Category;
export type SubcategoriesResponse = Subcategory[];
export type ProductsBySubcategoryResponse = Product[];

export interface GetSubcategoriesParams {
  category: number;
}

export interface UseApiReturn {

  getAllProducts: () => Promise<ProductsResponse>;
  getProductById: (id: number) => Promise<ProductResponse>;
  
  getCategoryById: (id: number) => Promise<Category>;
  getSubcategoriesByCategoryId: (categoryId: number) => Promise<SubcategoriesResponse>;
  
  getProductsBySubcategoryId: (subcategoryId: number) => Promise<ProductsBySubcategoryResponse>;
  
getImageUrl: (imagePath: string | null | undefined) => string;
}