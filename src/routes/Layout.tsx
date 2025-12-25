
import { Outlet, NavLink } from 'react-router-dom'
import Sidebar from '../components/component/Sidebar'
import Greeting from '../components/component/Greeting'

const Layout = () => {
  return (
    <div className='bg-secondary w-full h-screen md:flex justify-between'>
      {/***Persistent sidebar****/}
      <div className='w-[20%] md:[22%] lg:p-3 md:p-1'>
        <Sidebar/>
      </div>

      {/**The content area - that changes on navigation***/}
      <main className='bg-primary md:w-[78%] lg:w-[80%] m-3 rounded-sm shadow-md p-4'>
        <Greeting/>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout