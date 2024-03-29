import React, { useContext } from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';
import { CartContext } from '../Context/CartContext';


export const CardProduct = ({ product }) => {
    const { add } = useContext(CartContext);

    return (
        <div key={product.id} className="border bg-[#f4f4f3] rounded-lg p-4 flex flex-col justify-center items-center">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:opacity-50">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-green-300 bg-opacity-50 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    <IoAddCircleSharp onClick={() => add(product)} className="text-4xl cursor-pointer text-white" />
                </div>
            </div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600  "> <span className=' text-lg font-bold' >Price:</span> ${product.price}</p>
        </div>
    );
};