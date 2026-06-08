import type { 
  Product,
  ProductsResponse,
  ProductResponse,
  Category,
  Subcategory,
  SubcategoriesResponse,
  ProductsBySubcategoryResponse,
  GetSubcategoriesParams,
  UseApiReturn
} from '~/types/api';

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:1452/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const useApi = (): UseApiReturn => {

  const getAllProducts = async (): Promise<ProductsResponse> => {
    const response = await apiClient.get<ProductsResponse>('/api/products/');
    return response.data;
  };

  const getProductById = async (id: number): Promise<ProductResponse> => {
    const response = await apiClient.get<ProductResponse>(`/api/products/${id}`);
    return response.data;
  };

  const getCategoryById = async (id: number): Promise<Category> => {
    const response = await apiClient.get<Category>(`/api/category/${id}`);
    return response.data;
  };

  const getSubcategoriesByCategoryId = async (categoryId: number): Promise<Subcategory[]> => {
    const response = await apiClient.get<Subcategory[]>('/api/subcategory', {
      params: { category: categoryId } as GetSubcategoriesParams
    });
    return response.data;
  };

  const getProductsBySubcategoryId = async (subcategoryId: number): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>(`/api/subcategory/${subcategoryId}`);
    return response.data;
  };

  const getImageUrl = (imagePath: string | null | undefined): string => {
    if (!imagePath) return '/no-photo.png';
    
    if (imagePath.startsWith('image/')) {
      return `http://localhost:1452/${imagePath}`;
    }
    
    return `http://localhost:1452/image/${imagePath}`;
  };

  return {
    getAllProducts,
    getProductById,
    getCategoryById,
    getSubcategoriesByCategoryId,
    getProductsBySubcategoryId,
    getImageUrl
  };
};