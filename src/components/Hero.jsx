// import hero from "../assets/hero.jpg"
import {Link} from "react-router-dom"

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font max-w-7xl m-auto px-4">
                <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center lg:h-screen">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Elegant Residences For
                            <br className="hidden lg:inline-block"/><b className="text-indigo-500"> Discerning Buyers</b>
                        </h1>
                        <p className="mb-8 leading-relaxed">Explore luxury living at its finest. Discover a collection of exquisite properties in the most sought-after locations, offering urban luxury and serene living. Simplify your search for the perfect home with our expert guidance. Elevate your lifestyle and find your dream abode with us today.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/properties">Explore Properties</Link></button> 
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded-md" alt="hero" src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default Hero
