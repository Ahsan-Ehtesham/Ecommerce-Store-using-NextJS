import React from "react";

const Orders = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                TechWear
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order ID: #1100
              </h1>
              <p className="leading-relaxed mb-4">
                Your order has been successfully placed.
              </p>
              <div className="flex border-b-2 border-gray-300 mb-4">
                <a className="flex-grow py-2 text-lg px-1">Item Description</a>
                <a className="flex-grow py-2 text-lg px-1">Quantity</a>
                <a className="flex-grow py-2 text-lg px-1">Item Total</a>
              </div>
              <div className="flex justify-between border-gray-200 py-2">
                <span className="text-gray-500">T-shirt Black</span>
                <span className="text-gray-500">1</span>
                <span className="text-gray-900">Rs500</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 py-2">
                <span className="text-gray-500">T-shirt Black</span>
                <span className="text-gray-500">1</span>
                <span className="text-gray-900">Rs500</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 py-2">
                <span className="text-gray-500">T-shirt Black</span>
                <span className="text-gray-500">1</span>
                <span className="text-gray-900">Rs500</span>
              </div>

              <div className="flex mt-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs5080.00
                </span>
                <button className="flex ml-auto text-white bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-600/50 border-0 py-2 px-6 focus:outline-none rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
