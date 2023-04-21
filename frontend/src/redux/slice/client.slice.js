import { createSlice } from "@reduxjs/toolkit";


export const clientDataslice = createSlice({
  name: "client",
  initialState: {
    client: [],
    //isLodding: false,
    clients : {},
  },
  reducers: {
    clientDataSuccess: (state, action) => {
      
      state.client = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.status;
      state.isLodding = true;
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
    addClientSuccess: (state, action) => {
      state.client = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    getClientSuccess: (state, action) => {
      state.client = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    updateClientSuccess: (state, action) => {
      state.client = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    deleteClientSuccess: (state, action) => {
      state.client = state.client.filter(
        (clients) => clients.id !== action.payload.id
      );
        state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
  },
});
export const {
  clientDataSuccess,
  hasError,
  updateClientSuccess,
  getClientSuccess,
  addClientSuccess,
  deleteClientSuccess
} = clientDataslice.actions;

export default clientDataslice.reducer;
