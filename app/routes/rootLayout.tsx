import { Link, Outlet } from "react-router"

const RootLayout = () => {
  return (
 <>
  <div className="px-8">
  <nav>
      <div className="mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-white">
            Logo
          </Link>
        </div>


        {/* Desktop menu */}
        <div className="hidden space-x-8 lg:flex">
          <Link to="/" className="text-sm font-medium text-white transition-colors hover:text-gray-300">
            Home
          </Link>
          <Link to="/login" className="text-sm font-medium text-white transition-colors hover:text-gray-300">
            Login
          </Link>
          <Link to="/register" className="text-sm font-medium text-white transition-colors hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </nav>


    <Outlet/>
  </div>
 </>
  )
}

export default RootLayout