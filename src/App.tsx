import { Route, Routes } from "react-router-dom"
import Layout from "./routes/Layout"
import Dashboard from "./routes/Dashboard"
import Transaction from "./routes/Transaction"
import Report from "./routes/Report"
import Setting from "./routes/Setting"
import Home from "./routes/Home"
import Login from "./routes/auth/Login"
import Register from "./routes/auth/Register"
import AuthLayout from "./routes/auth/Layout"


function App() {


  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    {/* Layout Route: Sidebar + Outlet for children */}
    <Route  element={<Layout/>}>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="transaction" element={<Transaction/>}/>
      <Route path="report" element={<Report/>}/>
      <Route path="setting" element={<Setting/>}/>
    </Route>
    <Route element={<AuthLayout/>}>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
    </Route>
   </Routes>
  )
}

export default App
