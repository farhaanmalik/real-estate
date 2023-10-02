/* eslint-disable react/no-unescaped-entities */

import { useContext } from 'react';
import PropertiesItem from "../components/PropertiesItem";
import Filter from "../components/Filter";
import { AppContext } from "../components/RealEstateContext"

const AllProperty = () => {

    const { filteredProperties } = useContext(AppContext)

    return (
        <>
            <section className="text-gray-600 body-font max-w-7xl m-auto min-h-[76vh]">
                <div className="flex flex-col items-center justify-center flex-wrap pt-10 px-5">
                    <div className='text-xl my-2'>
                        <b>Select the Filter</b>
                    </div>
                    <Filter />
                </div>
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap justify-center">
                        {filteredProperties.length === 0 ? (
                            <p className="text-center text-gray-500 text-lg py-12">Sorry ! We don't have any house or flat that matches your preferences.</p>
                        ) : (
                            filteredProperties.map((property) => (
                                <PropertiesItem
                                    key={property.id}
                                    id={property.id}
                                    propertyName={property.propertyName}
                                    priceInLakhs={property.priceInLakhs}
                                    price={property.price}
                                    bedrooms={property.bedrooms}
                                    bathrooms={property.bathrooms}
                                    location={property.location}
                                    imageURL={property.imageURL}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProperty;
