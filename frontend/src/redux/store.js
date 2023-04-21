import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../redux/slice/login.slice";
import registerReducer from "../redux/slice/register.slice";
import clientDataReducer from "../redux/slice/client.slice";
import employeeDataReducer from "../redux/slice/employee.slice"
import passwordReducer from "../redux/slice/password.slice"
import taskReducer from "../redux/slice/task.slice"
import roleDataReducer from "../redux/slice/role.slice";
const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    clientData: clientDataReducer,
    employeeData: employeeDataReducer,
    password: passwordReducer,
    task: taskReducer,
    role: roleDataReducer,
  },
});
export { store };
