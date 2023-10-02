import { Link } from "react-router-dom";

const PropertiesItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, propertyName, priceInLakhs, bedrooms, price, bathrooms, location, imageURL } = props;

    return (
        <>
            <div className="lg:w-1/4 md:w-2/5 max-w-[350px] w-full bg-white border rounded-lg m-4 hover:shadow-lg hover:opacity-90">
                <Link to={`/property/${id}`} className="block relative h-52 rounded overflow-hidden">
                    <img alt={propertyName} className="object-cover object-center w-full h-full block" src={imageURL} />
                </Link>
                <div className="mt-4 py-2 px-4 pb-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">In {location}</h3>
                    <Link to={`/property/${id}`}>
                        <h2 className="text-gray-900 title-font text-lg font-medium w-fit">{propertyName}</h2>
                    </Link>
                    <p className="mt-1"><b>Price: </b>{price} <span>({priceInLakhs} Lakhs)</span></p>
                    <div className='flex justify-between'>
                        <span className="mt-1">Bedrooms: {bedrooms}</span>
                        <span className="mt-1">Bathrooms: {bathrooms}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertiesItem
