import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className=" p-3 bg-[#f4f4f3] text-gray-800 py-6  mt-32 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Trendify</p>
                    <p className="text-sm">Tu tienda de moda favorita</p>
                    <p className="text-sm mt-2">Síguenos en nuestras redes:</p>
                    <div className="flex gap-4 mt-2">
                        <FaFacebook className="h-6 w-6 hover:text-gray-500" />
                        <FaTwitter className="h-6 w-6 hover:text-gray-500" />
                        <FaInstagram className="h-6 w-6 hover:text-gray-500" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <a href="#" className="text-sm hover:text-gray-500">Contáctanos</a>
                    <p className="text-xs mt-1">Lunes a Viernes: 9am - 6pm</p>
                    <p className="text-xs">Email: info@trendify.com</p>
                </div>
            </div>
        </footer>
    );
};
