import { useState } from "react"
import { NavLink } from "react-router-dom"
const Header = () => {

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleSidebar = () =>{
        setOpenSidebar(true)
    }

    return (
        <>
            <header className="text-gray-600 bg-slate-100 shadow shadow-slate-200 body-font lg:px-10 sticky top-0 z-10">
                <div className="container mx-auto flex justify-between px-5 py-4 items-center">
                    <a href="/" className="flex w-fit title-font font-medium items-center text-gray-900">
                        <span className="md:ml-3 text-2xl">Prime<span className="text-indigo-500">View</span></span>
                    </a>
                    <div className="mt-2">
                        <div className="relative md:hidden block" onClick={handleSidebar}>Menu</div>
                        <nav className={openSidebar ? "absolute transform translate-x-0 opacity-100 block left-0 top-0 bg-white md:bg-transparent md:ml-auto md:relative md:w-full w-1/2 h-screen md:h-fit md:p-0 p-6 transition-all duration-200": "absolute transform -translate-x-24 opacity-0 hidden left-0 top-0 bg-white md:bg-transparent md:ml-auto md:relative md:w-full w-1/2 h-screen md:h-fit md:p-0 p-6 transition-all duration-200"}>
                            <div className="block md:hidden text-indigo-500">
                                <span onClick={() => setOpenSidebar(false)}>Close</span>
                            </div>
                            <ul className="md:flex flex-wrap items-center text-base justify-center md:mt-0 mt-6">
                                <li className="md:mt-0 mt-4">
                                    <NavLink to="/" className="active md:mx-6 hover:text-indigo-500" onClick={() => setOpenSidebar(false)}>Home</NavLink>
                                </li>
                                <li className="md:mt-0 mt-4">
                                    <NavLink to="/properties" className="md:mx-6 hover:text-indigo-500" onClick={() => setOpenSidebar(false)}>All Property</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
