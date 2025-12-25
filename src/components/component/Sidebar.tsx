import type { IconType } from "react-icons";
import Logo from "../ui/Logo"
import { RxDashboard, RxPieChart } from "react-icons/rx";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Profile from "./Profile";


const Sidebar = () => {

    interface sideBarType {
        id: number;
        menu: string;
        link: string;
        icon: IconType;
    }
     const sideBar: sideBarType[] = [
        {
            id: 1,
            menu: "Dashboard",
            link: "dashboard",
            icon: RxDashboard
        },
        {
            id: 2,
            menu: "Transaction",
            link: "/transaction",
            icon: AiOutlineTransaction
        },
        {
            id: 3,
            menu: "Report",
            link: "/report",
            icon: RxPieChart
        },
         {
            id: 4,
            menu: "Setting",
            link: "/setting",
            icon: IoSettingsOutline
        }
     ]

  return (
    <nav className="relative md:h-full">
        <Link to="/" >
            <Logo/>
        </Link>

        <div className="md:block hidden">
            <ul className="py-6">
                {sideBar.map(side => {
                    const Icon = side.icon;
                    return (
                        <li key={side.id} className="mb-3">
                            <NavLink to={side.link} className={({ isActive }) => isActive ? 'bg-black text-white font-semibold flex items-center w-full px-3 py-2 rounded-sm' : 
                            'flex items-center w-full px-3 py-2 rounded-sm' }>
                               <span className="mr-3"><Icon/></span>
                               <p>{side.menu}</p>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>

        {/***Navbar footer***/}
        <div className="absolute bottom-0 w-full md:block hidden">
            <Profile/>
        </div>
    </nav>
  )
}

export default Sidebar