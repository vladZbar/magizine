import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { users } from "../services/api/users/usersRegister"; // Импортируйте ваш API сервис
import { productsAPI } from "../services/api/products/products";
import authReduser from "../slice/users/users";
import productsReduser from "../slice/products/products";

const store = configureStore({
  reducer: {
    auth: authReduser,
    productsState: productsReduser,
    [users.reducerPath]: users.reducer, // Добавьте редюсер RTK Query
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(users.middleware, productsAPI.middleware), // Добавьте middleware RTK Query
});

// Настройка слушателей
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>; // Тип корневого состояния
export type AppDispatch = typeof store.dispatch; // Тип диспетчера

export default store;
