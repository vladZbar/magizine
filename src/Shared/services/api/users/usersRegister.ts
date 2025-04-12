import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IAuthUser,
  IRegisterRequest,
  IRegisterResponse,
  ITokensResponse,
} from "./usersDto";

export const users = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1/" }), // Укажите базовый URL вашего API
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterRequest, IRegisterResponse>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    authUser: builder.mutation<ITokensResponse, IAuthUser>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useAuthUserMutation } = users; // Хук для использования запроса
