import React from "react";
import { GrCart } from 'react-icons/gr';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return <div>
        <header className="text-gray-600 body-font shadow-lg shadow-gray-600/50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src="/logo.png" width={48} height={48} alt="Logo" />
                    <span className="ml-3 text-xl">TechWear</span>
                </a></Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-5">
                    <Link href={'/tshirts'} className="mr-5 hover:text-gray-900">T-Shirts</Link>
                    <Link href={'/hoodies'} className="mr-5 hover:text-gray-900">Hoodies</Link>
                    <Link href={'/watches'} className="mr-5 hover:text-gray-900">Watches</Link>
                    <Link href={'/stickers'} className="mr-5 hover:text-gray-900">Stickers</Link>
                </nav>
                <button className="inline-flex items-center text-white bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-600/50 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
                    <GrCart className="mr-2" /> Cart
                </button>
            </div>
        </header>
    </div>
};

export default Navbar;
