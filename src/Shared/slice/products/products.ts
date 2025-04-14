import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsResponse } from "../../services/api/products/productsDto";

export interface ProductsState {
  products: IProductsResponse[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProductsResponse[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
