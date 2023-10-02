import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <>
            <header className="text-gray-600 bg-slate-100 shadow shadow-slate-200 body-font lg:px-10 sticky top-0 z-10">
                <div className="container mx-auto flex justify-between px-5 py-4 items-center">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="md:ml-3 text-2xl">Prime<span className="text-indigo-500">View</span></span>
                    </a>
                    <div className="md:block hidden">
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <NavLink to="/" className="active mr-10 hover:text-indigo-500">Home</NavLink>
                            <NavLink to="/properties" className="mr-10 hover:text-indigo-500">All Property</NavLink>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
