import { createSlice } from "@reduxjs/toolkit";

export const employeeDataslice = createSlice({
  name: "employee",
  initialState: {
    employee: [],
    isLodding: false,
    employees: {},
  },
  reducers: {
    employeeDataSuccess: (state, action) => {
      state.employee = action.payload;
      state.message = action.payload?.message;
      state.status = action.payload?.status;
      state.isLodding = true;
    },
    hasError: (state, action) => {
      state.status = action.payload?.status;
      state.message = action.payload?.message;
      state.error = action.payload?.error;
    },
    addemployeeSuccess: (state, action) => {
      state.employee = action.payload;
      state.message = action.payload?.message;
      state.status = action.payload?.status;
    },
    getemployeeSuccess: (state, action) => {
      state.employee = action.payload;
      state.message = action.payload?.message;
      state.status = action.payload?.status;
    },
    updateemployeeSuccess: (state, action) => {
      state.employee = action.payload;
      state.message = action.payload?.message;
      state.status = action.payload?.status;
    },
    deleteemployeeSuccess: (state, action) => {
      state.employee = state.employee.filter(
        (employees) => employees.id !== action.payload.id
      );
      state.message = action.payload?.message;
      state.status = action.payload?.status;
    },
  },
});
export const {
  employeeDataSuccess,
  hasError,
  updateemployeeSuccess,
  getemployeeSuccess,
  addemployeeSuccess,
  deleteemployeeSuccess,
} = employeeDataslice.actions;

export default employeeDataslice.reducer;
