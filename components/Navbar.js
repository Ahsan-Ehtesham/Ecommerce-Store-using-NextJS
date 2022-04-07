import React from "react";
import { GrCart } from 'react-icons/gr';


const Navbar = () => {
    return <div>
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/logo.png" alt="Logo" />
                    <span class="ml-3 text-xl">TechWear</span>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-gray-900">T-Shirts</a>
                    <a class="mr-5 hover:text-gray-900">Hoodies</a>
                    <a class="mr-5 hover:text-gray-900">Watches</a>
                    <a class="mr-5 hover:text-gray-900">Stickers</a>
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    <GrCart className="mr-2"/> Cart
                </button>
            </div>
        </header>
    </div>
};

export default Navbar;
