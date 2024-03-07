import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';


export const CartProducts = ({ quantity, id, image, title, price, index }) => {

    const { delet, qmore, qless } = useContext(CartContext);

    return (
        <div key={index} className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center">
                <img className="w-24" src={image} alt={title} />
                <div className="flex flex-col gap-5 ml-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-700">Price: {price}</p>
                </div>
            </div>
            <div className='flex flex-col' >
                <button onClick={() => delet(id)} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                <div className='flex gap-3' >
                    <button onClick={() => qmore(id)} className='mt-3 bg-green-500 hover:bg-green-700 text-white font bold py-2 px-4 rounded' >+</button>
                    <button className='mt-3 font-bold text-2xl'>{quantity}</button>
                    <button onClick={() => qless(id)} className='mt-3 bg-red-500 hover:bg-red-700 text-white font bold py-2 px-4 rounded' >-</button>
                </div>

            </div>

        </div>
    )
}
