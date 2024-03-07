import React, { useContext, useState } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import { CardProduct } from '../../Components/CardProducts';
import { ProductsContext } from '../../Context/ProductsContext';

export const Products = () => {


    const { data, visibleProducts, totalProducts, loadLessProducts, loadMoreProducts } = useContext(ProductsContext)



    const [categories, setcategories] = useState("All category")
    const [price, setprice] = useState(0)


    const handleChange = (e) => {
        setcategories(e.target.value)
    }

    const handlechangeRange = (e) => {
        setprice(e.target.value)
    }


    const productsFilter = data.filter(product => {
        return (categories === 'All category' || product.category === categories) &&
            (price === 0 || product.price <= price);
    });





    return (
        <div name="shop" className='mt-32 flex flex-col gap-12'>
            <div className='flex lg:items-start items-center sm:flex-row flex-col justify-between'>
                <div className="ml-6 mt-4 relative">
                    <select onChange={handleChange} value={categories} className="block appearance-none border border-gray-300 text-xl font-bold py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-400">
                        <option>All category</option>
                        <option>men's clothing</option>
                        <option>jewelery</option>
                        <option>electronics</option>
                        <option>women's clothing</option>
                    </select>
                    <div className="arrow-container">
                        <FaArrowDownLong className="text-gray-700" />
                    </div>
                </div>
                <div className='lg:mr-6  mr-0 flex gap-2' >
                    <input min={0} max={1000} onChange={handlechangeRange} type="range" />
                    <span>Max Price: {price}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productsFilter.slice(0, visibleProducts).map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
            <div className='flex justify-center items-center gap-10'>
                {visibleProducts < totalProducts && (
                    <div className="flex justify-center mt-6">
                        <button onClick={loadMoreProducts} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                            Load More
                        </button>
                    </div>
                )}
                {visibleProducts >= 10 && (
                    <div className="flex justify-center mt-6">
                        <button onClick={loadLessProducts} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                            Load Less
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
