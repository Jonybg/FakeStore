import React, { useEffect, useState } from 'react';
import { IoAddCircleSharp } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
import { CardProduct } from '../../Components/CardProducts';

export const Products = () => {
    const [data, setData] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [totalProducts, setTotalProducts] = useState(0);

    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTotalProducts(data.length);
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
    };

    const loadLessProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts - 4)
    }

    return (
        <div className='mt-32 flex flex-col gap-12'>
            <div className='flex lg:items-start items-center sm:flex-row flex-col justify-between'>
                <div className="ml-6 mt-4 relative">
                    <select className="block appearance-none border border-gray-300 text-xl font-bold py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-400">
                        <option>All category</option>
                        <option>Man</option>
                        <option>Jewelery</option>
                        <option>Electronics</option>
                        <option>Women</option>
                    </select>
                    <div className="arrow-container">
                        <FaArrowDownLong className="text-gray-700" />
                    </div>
                </div>
                <div className='lg:mr-6  mr-0' >
                    <input type="range" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.slice(0, visibleProducts).map(product => (
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
