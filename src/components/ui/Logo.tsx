import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <div>
      <Link className="flex items-center gap-1" to='/'>
        <img src="/fluxledger.png" alt="logo" className="w-8"/>
        <h1 className="h1">Fluxledger</h1>
      </Link>
      
    </div>
  )
}

export default Logo