import React, { useContext } from 'react';
import BG from "../../assets/Hero/BG2.jpg";
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-scroll";

export const Hero = () => {
    const { Cart } = useContext(CartContext);

    return (
        <div name="home" className={`relative `}>
            <div className="bg-hero xl:bg-cover bg-contain bg-no-repeat bg-center h-[20rem] sm:h-[40rem] relative">
                <img className="hidden xl:block w-full h-full absolute inset-0" src={BG} alt="" />
                <div className="absolute top-1/2 left-0 ml-2 lg:ml-0 lg:left-1/4 transform -translate-y-1/2">
                    <h1 className="text-black xl:text-4xl text-xl font-bold mb-4">Discover the Latest Trends</h1>
                    <p className="text-black xl:text-lg  text-[11px] mb-6">Explore our collection of high-quality clothing and electronics.</p>
                    <Link to="shop" smooth={true} duration={500} offset={-220}>
                        <button className="px-1 xl:px-8 py-1 xl:py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                            Explore Now
                        </button>
                    </Link >
                </div>
            </div>
            {Cart && <div className="bg-transparent top-[200px left-0 w-full h-full absolute"></div>}
        </div>
    );
};
