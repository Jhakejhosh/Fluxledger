import { Outlet } from "react-router-dom"
import Logo from "../../components/ui/Logo"


const AuthLayout = () => {
  return (
    <div className="w-full">
        <div className="py-2 px-6">
            <Logo/>
        </div>
        <main className="md:flex items-center justify-center mt-15 lg:px-10 px-4">
            <Outlet/>
        </main>
    </div>
  )
}

export default AuthLayout