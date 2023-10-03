import PropertiesItem from "./PropertiesItem";
import { Link } from "react-router-dom";
import { AppContext } from "./RealEstateContext";
import { useContext } from "react";

const Property = () => {
    const { propertydata } = useContext(AppContext);
    return (
        <>
            <section className="text-gray-600 body-font bg-slate-50">
                <div className="container px-5 py-20 max-w-7xl m-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Discover Our Properties</h2>
                    <div className="flex flex-wrap justify-center">
                        {propertydata.slice(0, 6).map((property) => {
                            return <PropertiesItem
                                key={property.id}
                                id={property.id}
                                propertyName={property.propertyName}
                                priceInLakhs={property.priceInLakhs}
                                price={property.price}
                                bedrooms={property.bedrooms}
                                bathrooms={property.bathrooms}
                                location={property.location}
                                imageURL={property.imageURL}
                            />;
                        })}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link to="/properties" className="text-blue-500 underline hover:text-blue-700">Browse more properties</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Property;
