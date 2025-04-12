import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { users } from "../services/api/users/usersRegister"; // Импортируйте ваш API сервис

const store = configureStore({
  reducer: {
    [users.reducerPath]: users.reducer, // Добавьте редюсер RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(users.middleware), // Добавьте middleware RTK Query
});

// Настройка слушателей
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>; // Тип корневого состояния
export type AppDispatch = typeof store.dispatch; // Тип диспетчера

export default store;
