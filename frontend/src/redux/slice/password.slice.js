import { createSlice } from "@reduxjs/toolkit";

export const passwordslice = createSlice({
  name: "password",
  initialState: {
    password: [],
  },
  reducers: {
    forgetPasswordSuccess: (state, action) => {
      state.password = action.payload?.data;
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
    resetPasswordSuccess: (state, action) => {
      console.log(state.action, "slice")
      state.password = action.payload?.data;
      state.message = action.payload?.message;
      state.status = action.payload?.status;
      state.isLogin = true;
      state.accessToken = action.payload?.data.accessToken;
    },
  },
});
export const { forgetPasswordSuccess, hasError, resetPasswordSuccess } =
  passwordslice.actions;

export default passwordslice.reducer;
