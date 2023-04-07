import { BrowserRouter, Routes, Route , Outlet } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ClientTable } from "./components/ClientTable";
import { Client } from "./pages/Client";
import { TaskCard } from "./components/Card";
import { AddClient } from "./components/AddClient";
import { EmployeeTable } from "./components/EmployeeTable";
import { AddEmployee } from "./components/AddEditEmployee";
import { ForgotPassword } from "./pages/ForgetPassword";
import { ResetPassword } from "./pages/resetPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
           
      
            <Route path="blogdetail/:id" element={<BlogDetail />} />
          </Route>  */}
          <Route index path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset-token/:token" element={<ResetPassword />}></Route>
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<TaskCard />} />
            <Route path="/home/client" element={<ClientTable />} />
            <Route path="/home/employee" element={<EmployeeTable />} />
            <Route path="/home/addclient" element={<AddClient />}>
              <Route path="/home/addclient/:id" element={<AddClient />} />
            </Route>
            <Route path="/home/addemployee" element={<AddEmployee />}>
              <Route path="/home/addemployee/:id" element={<AddEmployee />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;