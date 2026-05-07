export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  categoryId: number;
  subcategoryId?: number;
  createdAt?: string;
  updatedAt?: string;
  inStock?: boolean;
  rating?: number;
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
  
  getImageUrl: (imagePath: string) => string;
}