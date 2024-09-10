import React from 'react'
import Heading from '../../HomePage/Shared/Button.jsx'
import ProductCard from './ProductCard'
import productsData from './ProductData.jsx'



const Products = () => {
    return (
        <div>
            <div className="container">
                {/* Header section */}
                <Heading title="Our Products"
                    sub="Explore Our Products"></Heading>
                {/* Body section */}
                <ProductCard data={productsData} />
            </div>
        </div>
    )
}

export default Products
