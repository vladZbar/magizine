//[GET] https://api.escuelajs.co/api/v1/products
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductsResponse } from "./productsDto";

export const productsAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse[], void>({
      query: () => "products",
    }),
    getPageProducts: builder.query<IProductsResponse[], number>({
      query: (page = 0) => `products?offset=${page}&limit=6`,
    }),
    getProductById: builder.query<IProductsResponse, number>({
      query: (id) => `products/${id}`
    })
  }),
});

export const { useGetProductsQuery, useGetPageProductsQuery, useLazyGetProductsQuery, useGetProductByIdQuery, useLazyGetProductByIdQuery } = productsAPI;
