import { useContext } from 'react';
import { AppContext } from "./RealEstateContext"

const Filter = () => {
    const { cities, bedRooms, handleFilterChange, selectedFilter } = useContext(AppContext)

    const priceRanges = [
        { value: '', label: 'Select Price' },
        { value: '40', label: 'Under 40 lakhs' },
        { value: '50', label: 'Under 50 lakhs' },
        { value: '60', label: 'Under 60 lakhs' },
        { value: '70', label: 'Under 70 lakhs' },
        { value: '80', label: 'Under 80 lakhs' },
        { value: '90', label: 'Under 90 lakhs' },
        { value: '100', label: 'Under 100 lakhs' },
    ];
    return (
        <>
            <div className="flex flex-wrap justify-center">
                <div className='my-2'>
                    <select
                        className="px-4 py-2 border outline-none rounded"
                        value={selectedFilter.price}
                        onChange={(e) => handleFilterChange({ ...selectedFilter, price: e.target.value })}
                    >
                        {priceRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                                {range.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="m-2">
                    <select
                        className="px-4 py-2 border outline-none rounded"
                        value={selectedFilter.city}
                        onChange={(e) => handleFilterChange({ ...selectedFilter, city: e.target.value })}
                    >
                        <option value="">Select City</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="m-2">
                    <select
                        className="px-4 py-2 border outline-none rounded"
                        value={selectedFilter.bedRooms}
                        onChange={(e) => handleFilterChange({ ...selectedFilter, bedRooms: e.target.value })}
                    >
                        <option value="">Select BHK</option>
                        {bedRooms.map((bedroom, index) => (
                            <option key={index} value={bedroom === "Select BHK" ? "" : bedroom}>
                                {bedroom === "Select BHK" ? bedroom : `${bedroom} BHK`}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};


export default Filter;

