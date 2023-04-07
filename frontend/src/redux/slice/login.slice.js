import { createSlice } from "@reduxjs/toolkit";

export const loginslice = createSlice({
  name: "login",
  initialState: {
    login: [],
    isLogin: false,
    authState: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.login = action.payload?.data;
      state.message = action.payload?.message;
      state.status = action.payload?.status;
      state.isLogin = true;
      state.accessToken = action.payload?.data.accessToken;
    },
    hasError: (state, action) => {
      state.status = action.payload?.status;
      state.message = action.payload?.message;
      state.error = action.payload?.error;
    },
  },
});
export const { loginSuccess, hasError } = loginslice.actions;

export default loginslice.reducer;
