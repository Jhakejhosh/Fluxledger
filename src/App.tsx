import { Route, Routes } from "react-router-dom"
import Layout from "./routes/Layout"
import Dashboard from "./routes/Dashboard"
import Transaction from "./routes/Transaction"
import Report from "./routes/Report"
import Setting from "./routes/Setting"


function App() {


  return (
   <Routes>
    {/* Layout Route: Sidebar + Outlet for children */}
    <Route path="/" element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="transaction" element={<Transaction/>}/>
      <Route path="report" element={<Report/>}/>
      <Route path="setting" element={<Setting/>}/>
    </Route>
   </Routes>
  )
}

export default App
