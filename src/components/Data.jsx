const propertydata = [
    {
        id: 1,
        propertyName: "Cozy Apartment in Goa",
        price: "₹75,00,000",
        priceInLakhs: 75, // ₹75,00,000 = 75 lakhs
        bedrooms: 3,
        bathrooms: 2,
        location: "Goa",
        imageURL: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 2,
        propertyName: "Modern Flat in Mumbai",
        price: "₹95,00,000",
        priceInLakhs: 95, // ₹95,00,000 = 95 lakhs
        bedrooms: 6,
        bathrooms: 3,
        location: "Mumbai",
        imageURL: "https://images.unsplash.com/photo-1493606371202-6275828f90f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
        id: 3,
        propertyName: "Spacious House",
        price: "₹85,00,000",
        priceInLakhs: 85, // ₹85,00,000 = 85 lakhs
        bedrooms: 4,
        bathrooms: 2,
        location: "Bangalore",
        imageURL: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: 4,
        propertyName: "Modern Apartment in Delhi",
        price: "₹70,00,000",
        priceInLakhs: 70, // ₹70,00,000 = 70 lakhs
        bedrooms: 3,
        bathrooms: 2,
        location: "Delhi",
        imageURL: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 5,
        propertyName: "Modern House",
        price: "₹50,00,000",
        priceInLakhs: 50, // ₹50,00,000 = 50 lakhs
        bedrooms: 2,
        bathrooms: 2,
        location: "Hyderabad",
        imageURL: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 6,
        propertyName: "Seaside House",
        price: "₹75,00,000",
        priceInLakhs: 75, // ₹75,00,000 = 75 lakhs
        bedrooms: 3,
        bathrooms: 2,
        location: "Mumbai",
        imageURL: "https://images.adsttc.com/media/images/5ef2/4340/b357/6529/f500/03e9/newsletter/Architecture-BRIO-Alibaug_Artists_Retreat-House_A-_Entrance_Steps.jpg?1592935222"
    },
    {
        id: 7,
        propertyName: "Modern House in Andheri",
        price: "₹80,00,000",
        priceInLakhs: 80, // ₹80,00,000 = 80 lakhs
        bedrooms: 4,
        bathrooms: 3,
        location: "Mumbai",
        imageURL: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    },
    {
        id: 8,
        propertyName: "Modern Flat",
        price: "₹55,00,000",
        priceInLakhs: 55, // ₹55,00,000 = 55 lakhs
        bedrooms: 4,
        bathrooms: 2,
        location: "Bangalore",
        imageURL: "https://mygate.com/wp-content/uploads/2023/03/51.jpg"
    },
    {
        id: 9,
        propertyName: "Apartment In Hyderabad",
        price: "₹65,00,000",
        priceInLakhs: 65, // ₹65,00,000 = 65 lakhs
        bedrooms: 3,
        bathrooms: 2,
        location: "Hyderabad",
        imageURL: "https://images.unsplash.com/photo-1602082550187-3f954840a0f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 10,
        propertyName: "Luxary House",
        price: "₹80,00,000",
        priceInLakhs: 80, // ₹80,00,000 = 80 lakhs
        bedrooms: 5,
        bathrooms: 3,
        location: "Delhi",
        imageURL: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
    },
    {
        id: 11,
        propertyName: "Flat in Shalimar",
        price: "₹40,00,000",
        priceInLakhs: 40, // ₹40,00,000 = 40 lakhs
        bedrooms: 2,
        bathrooms: 1,
        location: "Lucknow",
        imageURL: "https://is1-3.housingcdn.com/4f2250e8/35e149c1f863048041450eafaeeb6420/v5/fs/shalimar_grand-butler_colony-lucknow-shalimar_corp_limited.jpg"
    },
    {
        id: 12,
        propertyName: "Flat in Sahara State",
        price: "₹45,00,000",
        priceInLakhs: 45, // ₹45,00,000 = 45 lakhs
        bedrooms: 2,
        bathrooms: 1,
        location: "Lucknow",
        imageURL: "https://images.timesproperty.com/properties/photos/6739/mini/at_dreams_t_rose_tower_jankipuram_lucknow_at_dreams_infra_buildcon.png"
    }
];

export default propertydata;