import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsResponse } from "../../services/api/products/productsDto";

export interface ProductsState {
  products: IProductsResponse[];
  page: number;
  limit: number;
  id: number;
  showBasket: boolean;
  countBasket: number;
}

const initialState: ProductsState = {
  products: [],
  page: 0,
  limit: 6,
  id: 0,
  showBasket: false,
  countBasket: JSON.parse(localStorage.getItem("basket") || "[]").length || 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProductsResponse[]>) {
      state.products = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      state.limit = state.page + 6;
    },
    setId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    setShowBasket(state, action: PayloadAction<boolean>) {
      state.showBasket = action.payload;
    },
    setCountBasket(state, action: PayloadAction<number>) {
      state.countBasket = action.payload;
    },
  },
});

export const { setProducts, setPage, setId, setShowBasket, setCountBasket } =
  productsSlice.actions;
export default productsSlice.reducer;
