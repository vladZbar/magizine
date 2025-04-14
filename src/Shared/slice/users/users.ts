import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accesToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  accesToken: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens(
      state,
      action: PayloadAction<{ accesToken: string; refreshToken: string }>
    ) {
      state.accesToken = action.payload.accesToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearTokens(state) {
      state.accesToken = "";
      state.refreshToken = "";
    },
  },
});


export const { setTokens, clearTokens } = authSlice.actions;
export default authSlice.reducer;