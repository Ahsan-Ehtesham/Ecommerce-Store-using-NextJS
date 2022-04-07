import React from "react";
import { GrCart } from 'react-icons/gr';


const Navbar = () => {
    return <div>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/logo.png" alt="Logo" />
                    <span className="ml-3 text-xl">TechWear</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">T-Shirts</a>
                    <a className="mr-5 hover:text-gray-900">Hoodies</a>
                    <a className="mr-5 hover:text-gray-900">Watches</a>
                    <a className="mr-5 hover:text-gray-900">Stickers</a>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    <GrCart className="mr-2"/> Cart
                </button>
            </div>
        </header>
    </div>
};

export default Navbar;
