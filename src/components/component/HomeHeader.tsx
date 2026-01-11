import { Link } from "react-router-dom"
import Logo from "../ui/Logo"


const HomeHeader = () => {
  return (
    <div className="flex justify-between items-center py-3 md:px-10 px-3">
        <Logo/>
        <Link to='/register'>
            <button className="bg-black text-white py-2 px-6 rounded-full cursor-pointer">
               Get started
            </button>
        </Link>
    </div>
  )
}

export default HomeHeader