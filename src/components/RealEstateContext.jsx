/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";
import PropTypes from 'prop-types';
import propertydata from "./Data";
const AppContext = createContext();

const cities = [...new Set(propertydata.map((curCity) => curCity.location)),];
const bedRooms = [...new Set(propertydata.map((curBdrm) => curBdrm.bedrooms)),];

const AppProvider = ({ children }) => {

    const [selectedFilter, setSelectedFilter] = useState({
        price: '',
        city: '',
        bedRooms: '',
    });

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    // Filtered Properties
    const filteredProperties = propertydata.filter((property) => {
        const { price, city, bedRooms } = selectedFilter;
        return (
            (!price || price === "Price" || property.priceInLakhs <= Number(price)) &&
            (!city || city === "City" || property.location === city) &&
            (!bedRooms || bedRooms === "Select BHK" || property.bedrooms === Number(bedRooms))
        );
    })

    return <AppContext.Provider value={{ propertydata, cities, bedRooms, handleFilterChange, selectedFilter, filteredProperties }}>
        {children}
    </AppContext.Provider>
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AppProvider, AppContext };