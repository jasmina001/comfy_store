import { Outlet } from "react-router-dom"
import { Header, Navbar } from "../components"

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-6xl mx-auto px-8">
        <Outlet />
      </div>

    </>
  )
}

export default HomeLayout