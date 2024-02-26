import React from 'react';
import { IoWalletOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { CiSquareCheck } from "react-icons/ci";

export const Info = () => {
    return (
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8  ">
            <div className="flex items-center flex-col justify-center text-center gap-6">
                <div className='bg-[#f4f4f3] w-28 h-28 rounded-[50%] flex items-center justify-center'>
                    <BsTruck className="text-4xl text-blue-500" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className="text-lg font-semibold">FREE DELIVERY FROM $250</h3>
                    <p className="text-sm text-gray-600">Enjoy free shipping on orders over $250</p>
                </div>
            </div>
            <div className="flex items-center flex-col justify-center text-center gap-6">
                <div className='bg-[#f4f4f3] w-28 h-28 rounded-[50%] flex items-center justify-center'>
                    <IoWalletOutline className="text-4xl text-blue-500" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className="text-lg font-semibold">MONEY BACK GUARANTEE</h3>
                    <p className="text-sm text-gray-600">Not satisfied with your purchase? Get your money back!</p>
                </div>
            </div>
            <div className="flex items-center flex-col justify-center text-center gap-6">
                <div className='bg-[#f4f4f3] w-28 h-28 rounded-[50%] flex items-center justify-center'>
                    <CiSquareCheck className="text-4xl text-blue-500" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className="text-lg font-semibold">AUTHENTICITY 100% GUARANTEED</h3>
                    <p className="text-sm text-gray-600">Shop with confidence knowing all our products are authentic.</p>
                </div>
            </div>
        </div>
    );
};
