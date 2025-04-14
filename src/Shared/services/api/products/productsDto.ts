export interface ICategoryResponse {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface IProductsResponse {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategoryResponse;
  images: string[];
  creationAt: string;
  updatedAt: string;
}
