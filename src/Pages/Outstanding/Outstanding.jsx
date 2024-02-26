import React from 'react';
import Clothes from "../../assets/Outstanding/Clothes.jpg";
import PC from "../../assets/Outstanding/PC.jpg";

export const Outstanding = () => {
    return (
        <div className='mt-16 flex flex-col xl:flex-row justify-center gap-6'>
            <div className="flex flex-col sm:flex-row items-center text-center bg-gray-100 p-4 rounded-lg">
                <img src={Clothes} alt="Clothes" className="w-60 h-60 sm:w-80 sm:h-80 rounded-lg mb-4 sm:mb-0" />
                <div className="ml-4 flex flex-col gap-3">
                    <h2 className="text-3xl font-bold">Clothing for both sexes</h2>
                    <p>Garments for both men and women and also jewelry!</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center text-center bg-gray-100 p-4 rounded-lg mt-6 sm:mt-0">
                <img src={PC} alt="PC" className="w-60 h-60 sm:w-80 sm:h-80 rounded-lg mb-4 sm:mb-0" />
                <div className="ml-4 flex flex-col gap-3">
                    <h2 className="text-3xl font-bold">Electronics and components</h2>
                    <p>We have all kinds of electronic devices!</p>
                </div>
            </div>
        </div>
    );
};
