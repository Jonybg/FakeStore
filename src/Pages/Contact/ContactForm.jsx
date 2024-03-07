import React from 'react';

export const ContactForm = () => {
    return (
        <div name="contact" className="mt-16 bg-[#f4f4f3] py-12 px-6 rounded-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-lg font-semibold">Name</label>
                    <input type="text" id="name" name="name" className="border rounded-lg px-4 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-lg font-semibold">Email</label>
                    <input type="email" id="email" name="email" className="border rounded-lg px-4 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-lg font-semibold">Phone</label>
                    <input type="tel" id="phone" name="phone" className="border rounded-lg px-4 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-lg font-semibold">Message</label>
                    <textarea id="message" name="message" rows="5" className="border rounded-lg px-4 py-2"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Send</button>
            </form>
        </div>
    );
};
