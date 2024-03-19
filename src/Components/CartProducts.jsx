import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

export const CartProducts = ({ quantity, id, image, title, price, index }) => {
    const { delet, qmore, qless } = useContext(CartContext);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDecreaseModal, setShowDecreaseModal] = useState(false);

    const toggleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    const toggleDecreaseModal = () => {
        setShowDecreaseModal(!showDecreaseModal);
    };

    const handleDelete = () => {
        delet(id);
        toggleDeleteModal();
    };

    const handleDecrease = () => {
        qless(id);
        toggleDecreaseModal();
    };

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
                <button onClick={toggleDeleteModal} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                <div className='flex gap-3' >
                    <button onClick={toggleDecreaseModal} className='mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>-</button>
                    <button className='mt-3 font-bold text-2xl'>{quantity}</button>
                    <button onClick={() => qmore(id)} className='mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>+</button>
                </div>
            </div>

            {showDeleteModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 max-w-md rounded-md text-center">
                        <h2 className="text-2xl font-bold mb-4">Confirm deletion</h2>
                        <p>Are you sure you want to delete this product?</p>
                        <div className="mt-6 flex gap-2 justify-center">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full" onClick={handleDelete}>Delete</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full" onClick={toggleDeleteModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {showDecreaseModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 max-w-md rounded-md text-center">
                        <h2 className="text-2xl font-bold mb-4">Confirm decrease</h2>
                        <p>Are you sure you want to decrease the quantity of this product?</p>
                        <div className="mt-6 flex gap-2 justify-center">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full" onClick={handleDecrease}>Decrease</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full" onClick={toggleDecreaseModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
