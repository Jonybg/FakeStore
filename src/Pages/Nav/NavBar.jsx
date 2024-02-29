import React, { useState, useEffect, useContext } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaHome, FaInfo, FaShopify, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ARG from "../../assets/Nav/argentina.png"
import { IoMdClose } from "react-icons/io";
import { CartContext } from '../../Context/CartContext';

export const NavBar = () => {
    const { menu, Cart, data, toggleCart, toggleMenu } = useContext(CartContext);

    return (
        <nav className='h-auto'>
            {Cart && <div className="blur-background absolute top-[100px] left-0 w-full h-full backdrop-filter backdrop-blur-sm"></div>}
            <div className='m-3 flex justify-between items-center mt-10'>
                <div className={`flex items-center xl:ml-32 ml-0 gap-44 ${menu ? "menu-open" : ""}`}>
                    <span className='text-4xl font-bold'>Trendify</span>
                    <ul className={`nav-list xl:flex flex-col xl:flex-row gap-5 text-xl h-full cursor-pointer ${menu ? "flex" : "hidden"}`}>
                        <li className='hover:border-b-2 border-black flex gap-3 items-center'>
                            {menu ? <FaHome /> : ""}
                            Home
                            {menu ? <IoIosArrowForward className='ml-auto' /> : ""}
                        </li>
                        <li className='hover:border-b-2 border-black flex gap-3 items-center'>
                            {menu ? <FaInfo /> : ""}
                            Info
                            {menu ? <IoIosArrowForward className='ml-auto' /> : ""}
                        </li>
                        <li className='hover:border-b-2 border-black flex gap-3 items-center'>
                            {menu ? <FaShopify /> : ""}
                            Shop
                            {menu ? <IoIosArrowForward className='ml-auto' /> : ""}
                        </li>
                        <li className='hover:border-b-2 border-black flex gap-3 items-center'>
                            {menu ? <FaPhoneAlt /> : ""}
                            Contact
                            {menu ? <IoIosArrowForward className='ml-auto' /> : ""}
                        </li>
                        {menu && <hr className="w-full border-gray-300 my-4" />}
                        {menu && (
                            <>
                                <li>My Account</li>
                                <li>Tracking Order</li>
                                <li>Help</li>
                                <li>Comments</li>
                                <hr className="w-full border-gray-300 my-4" />
                                <div className='flex gap-3 items-center'>
                                    <img className='w-10 ml-4' src={ARG} alt="" />
                                    <span>Argentina</span>
                                </div>
                            </>
                        )}
                    </ul>
                </div>
                <div className='flex gap-5 xl:mr-32 mr-0'>
                    <IoMenu onClick={toggleMenu} className='xl:hidden flex cursor-pointer' size={30} />
                    <IoCartOutline className='cursor-pointer' onClick={toggleCart} size={30} />
                    <div className={`${Cart ? "flex" : "hidden"} fixed right-0 top-[90px] overflow-y-auto bg-gray-900 bg-opacity-75 z-50`} style={{ maxHeight: "calc(100vh - 120px)" }}>
                        <div className="flex items-center justify-center h-full">
                            <div className="bg-white p-8 max-w-3xl w-screen">
                                <div className='flex items-center justify-between mb-4'>
                                    <h2 className="text-2xl font-bold">Your Cart</h2>
                                    <IoMdClose className='cursor-pointer' onClick={toggleCart} size={30} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    {data.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between border-b border-gray-300 pb-4">
                                            <div className="flex items-center">
                                                <img className="w-24" src={item.image} alt={item.title} />
                                                <div className="flex flex-col gap-5 ml-4">
                                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                                    <p className="text-gray-700">Price: {item.price}</p>
                                                </div>
                                            </div>
                                            <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="text-lg font-semibold">Total:</div>
                                    <div className="text-lg font-bold">200 USD</div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mr-4">Buy</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
