import React, { useState, useEffect, useContext, useMemo } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaHome, FaInfo, FaShopify, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ARG from "../../assets/Nav/argentina.png"
import { IoMdClose } from "react-icons/io";
import { CartContext } from '../../Context/CartContext';
import { CartProducts } from '../../Components/CartProducts';
import { Link } from "react-scroll";


export const NavBar = () => {
    const { menu, clearCart, Cart, productsList, toggleCart, toggleMenu } = useContext(CartContext);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [showThanksMessage, setShowThanksMessage] = useState(false);

    const totalCalculate = () => {
        return productsList.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    }

    useEffect(() => {
        if (showConfirmationModal) {
            return;
        }
    }, [showConfirmationModal]);

    useEffect(() => {
        if (showThanksMessage) {
            const timer = setTimeout(() => {
                setShowThanksMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showThanksMessage]);

    const handleBuy = () => {
        setShowConfirmationModal(true);
        setShowThanksMessage(true);
    };

    const handleConfirmation = (confirmed) => {
        if (confirmed) {
            clearCart();
        }
        setShowConfirmationModal(false);
        toggleCart(false)
    };

    const handledecline = () => {
        handleConfirmation(false)
        setShowThanksMessage(false)
    }
    const calculateTotalItems = () => {
        return productsList.reduce((acc, item) => acc + item.quantity, 0);
    };


    return (
        <nav className='h-20 fixed top-0 w-full z-50 bg-white '>
            {Cart && <div className="blur-background absolute top-[100px] left-0 w-full h-full"></div>}
            <div className='m-3 flex justify-between items-center mt-6'>
                <div className={`flex items-center xl:ml-32 ml-0 gap-44 ${menu ? "menu-open" : ""}`}>
                    <span className='cursor-pointer text-4xl font-bold'> <Link to="home" smooth={true} duration={500} offset={-220}>Trendify  </Link></span>
                    <ul className={`nav-list xl:flex flex-col xl:flex-row gap-5 text-xl h-full   cursor-pointer ${menu ? "flex" : "hidden"}`}>
                        <Link to="home" smooth={true} duration={500} offset={-220}>
                            <div className=" xl:mt-0 mt-4 ml-6 flex items-center gap-4">
                                {menu ? <FaHome /> : ""}
                                <span>Home</span>
                            </div>
                            {menu ? <IoIosArrowForward className='ml-auto' /> : ""}
                        </Link>
                        <Link to="info" smooth={true} duration={500} offset={-220}>
                            <div className=" ml-6 flex items-center gap-4">
                                {menu ? <FaInfo /> : ""}
                                <span>Info</span>
                            </div>
                            {menu ? <IoIosArrowForward className='ml-auto' /> : ""}
                        </Link>
                        <Link to="shop" smooth={true} duration={500} offset={-220}>
                            <div className=" ml-6 flex items-center gap-4">
                                {menu ? <FaShopify /> : ""}
                                <span>Shop</span>
                            </div>
                            {menu ? <IoIosArrowForward className='ml-auto' /> : ""}
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-220}>
                            <div className="ml-6 flex items-center gap-4">
                                {menu ? <FaPhoneAlt /> : ""}
                                <span>Contact</span>
                            </div>
                            {menu ? <IoIosArrowForward className='ml-auto' /> : ""}
                        </Link>
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
                    <div>
                        <IoCartOutline className='cursor-pointer' onClick={toggleCart} size={30} />
                        <span className='relative left-4 bottom-3 bg-gray-200 rounded-[50%] px-2 py-1'>{calculateTotalItems()}</span>
                    </div>

                    <div className={`${Cart ? "flex" : "hidden"} fixed right-0 top-[80px] overflow-y-auto bg-gray-900 bg-opacity-75 z-50`} style={{ maxHeight: "calc(100vh - 120px)" }}>
                        <div className="flex items-center justify-center h-full">
                            <div className="bg-white p-8 max-w-3xl w-screen">
                                <div className='flex items-center justify-between mb-4'>
                                    <h2 className="text-2xl font-bold">Your Cart</h2>
                                    <IoMdClose className='cursor-pointer' onClick={toggleCart} size={30} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    {productsList.map((item, index) => (
                                        <CartProducts
                                            quantity={item.quantity}
                                            id={item.id}
                                            key={index}
                                            image={item.image}
                                            title={item.title}
                                            price={item.price}
                                        />
                                    ))}
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="text-lg font-semibold">Total:</div>
                                    <div className="text-lg font-bold">{totalCalculate()}</div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    {productsList.length > 0 && (
                                        <>
                                            <button onClick={handleBuy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mr-4">Buy</button>
                                            <button onClick={() => clearCart()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full">Clear</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showConfirmationModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 max-w-md rounded-md text-center">
                        <h2 className="text-2xl font-bold mb-4">Confirm purchase</h2>
                        <p>Are you sure about making the purchase?</p>
                        <div className="mt-6 flex gap-2 justify-center">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full" onClick={() => handleConfirmation(true)}>Confirm</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full" onClick={handledecline}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            {showThanksMessage && !showConfirmationModal && (
                <div className="fixed bottom-0 left-0 w-full p-4 bg-green-500 text-white text-center z-50">
                    Thanks for your purchase
                </div>
            )}
        </nav>
    );
};
