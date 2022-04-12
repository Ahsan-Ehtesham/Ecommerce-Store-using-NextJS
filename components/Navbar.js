import React, { useRef } from "react";
import { GrCart, GrClose } from "react-icons/gr";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg shadow-gray-600/50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src="/logo.png" width={48} height={48} alt="Logo" />
              <span className="ml-3 text-xl">TechWear</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-5">
            <Link href={"/tshirts"} className="mr-5 hover:text-gray-900">
              T-Shirts
            </Link>
            <Link href={"/hoodies"} className="mr-5 hover:text-gray-900">
              Hoodies
            </Link>
            <Link href={"/watches"} className="mr-5 hover:text-gray-900">
              Watches
            </Link>
            <Link href={"/stickers"} className="mr-5 hover:text-gray-900">
              Stickers
            </Link>
          </nav>
          <button
            onClick={toggleCart}
            className="inline-flex items-center text-white bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-600/50 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 cursor-pointer"
          >
            <GrCart className="mr-2" /> Cart
          </button>
        </div>
      </header>
      <div
        ref={ref}
        className="sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/3 z-10 sideCart absolute top-0 right-0 bg-indigo-100 px-2 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-4 cursor-pointer text-xl"
        >
          <GrClose />
        </span>
        <ul>
          {Object.keys(cart).length == 0 && (
            <div className="my-5">No items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="bg-white rounded p-5 my-5">
                <div className="flex">
                  <img
                    className="mr-3 rounded"
                    width={50}
                    height={50}
                    src="https://m.media-amazon.com/images/I/61R0oSuKMLL._AC_UX569_.jpg"
                  />
                  <div className="w-3/5 flex items-center font-semibold">
                    {cart[k].name}
                  </div>
                  <div className="w-1/5 flex items-center justify-end font-semibold text-lg">
                    <FaMinusCircle
                      onClick={() =>
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="mr-2 cursor-pointer"
                    />{" "}
                    {cart[k].qty}{" "}
                    <FaPlusCircle onClick={() =>
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      } className="ml-2 cursor-pointer" />
                  </div>
                  <div className="w-1/5 flex items-center justify-end font-semibold">
                    ₨{cart[k].price}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-end space-x-2">
          <button
            className="inline-flex items-center text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-lg shadow-red-600/50 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 cursor-pointer"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <button className="inline-flex items-center text-white bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-600/50 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 cursor-pointer">
            <IoBagCheckOutline className="mr-2" /> Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
