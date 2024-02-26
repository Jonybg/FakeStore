import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaHome, FaInfo, FaShopify, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ARG from "../../assets/Nav/argentina.png"


export const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav className='h-auto'>
            <div className='m-3 flex justify-between items-center mt-10'>
                <div className={`flex items-center xl:ml-32 ml-0 gap-44 ${menu ? "menu-open" : ""}`}>
                    <span className='text-4xl font-bold'>Trendify</span>
                    <ul className={`nav-list xl:flex flex gap-5 text-xl cursor-pointer ${menu ? "flex" : "hidden"}`}>
                        <li className='flex gap-3 items-center'>
                            {menu ? <FaHome /> : ""}
                            Home
                            <IoIosArrowForward className='ml-auto' />
                        </li>
                        <li className='flex gap-3 items-center'>
                            {menu ? <FaInfo /> : ""}
                            Info
                            <IoIosArrowForward className='ml-auto' />
                        </li>
                        <li className='flex gap-3 items-center'>
                            {menu ? <FaShopify /> : ""}
                            Shop
                            <IoIosArrowForward className='ml-auto' />
                        </li>
                        <li className='flex gap-3 items-center'>
                            {menu ? <FaPhoneAlt /> : ""}
                            Contact
                            <IoIosArrowForward className='ml-auto' />
                        </li>
                        {menu && <hr className="w-full border-gray-300 my-4" />

                        }
                        {menu && (
                            <>
                                <li>My Account</li>
                                <li>Tracking Order</li>
                                <li>Help</li>
                                <li>Comments</li>
                                <hr className="w-full  border-gray-300 my-4" />
                                <div className='flex gap-3 items-center'>
                                    <img className=' w-10 ml-4' src={ARG} alt="" />
                                    <span>Argentina</span>
                                </div>


                            </>
                        )}



                    </ul>

                </div>
                <div className='flex gap-5 xl:mr-32 mr-0 '>
                    <IoMenu onClick={toggleMenu} className='xl:hidden flex cursor-pointer' size={30} />
                    <IoCartOutline size={30} />
                </div>
            </div>
        </nav>
    );
};
