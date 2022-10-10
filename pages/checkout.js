import React from "react";
import { GrCreditCard } from "react-icons/gr";

const Checkout = ({ cart, subTotal }) => {
  return (
    <>
      <section className="body-font overflow-hidden">
        <div className="container">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 p-8">
              <div className="contact-info">
                <h1 className="text-xl font-bold mb-4">Contact Information</h1>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="after:content-['*'] after:ml-0.5 after:text-red-500 leading-7 text-sm font-semibold text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </form>
              </div>
              <div className="payment-info py-4">
                <h1 className="text-xl font-bold mb-4">Payment Details</h1>
                <form>
                  <div className=" mb-4">
                    <label
                      htmlFor="cardno"
                      className="after:content-['*'] after:ml-0.5 after:text-red-500 leading-7 text-sm text-gray-600"
                    >
                      Card Number
                    </label>
                    <input
                      type="number"
                      id="cardno"
                      name="cardno"
                      className="w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-3/4">
                      <div className="relative">
                        <label
                          htmlFor="expdate"
                          className="after:content-['*'] after:ml-0.5 after:text-red-500 leading-7 text-sm text-gray-600"
                        >
                          Expiration Date (MM/YY)
                        </label>
                        <input
                          type="date"
                          id="expdate"
                          name="expdate"
                          className="w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/4">
                      <div className="relative">
                        <label
                          htmlFor="cvv"
                          className="after:content-['*'] after:ml-0.5 after:text-red-500 leading-7 text-sm text-gray-600"
                        >
                          CVV
                        </label>
                        <input
                          type="number"
                          id="cvv"
                          name="cvv"
                          className="w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="shipping-info py-4">
                <h1 className="text-xl font-bold mb-4">Shipping Address</h1>
                <form>
                  <div className=" mb-4">
                    <label
                      htmlFor="address"
                      className="after:content-['*'] after:ml-0.5 after:text-red-500 leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-4/12">
                      <div className="relative">
                        <label
                          htmlFor="city"
                          className="after:content-['*'] after:ml-0.5 after:text-red-500 leading-7 text-sm text-gray-600"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-4/12">
                      <div className="relative">
                        <label
                          htmlFor="state"
                          className="after:content-['*'] after:ml-0.5 after:text-red-500 leading-7 text-sm text-gray-600"
                        >
                          State/Province
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          className="w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-4/12">
                      <div className="relative">
                        <label
                          htmlFor="pcode"
                          className="after:content-['*'] after:ml-0.5 after:text-red-500 leading-7 text-sm text-gray-600"
                        >
                          Postal Code
                        </label>
                        <input
                          type="number"
                          id="pcode"
                          name="pcode"
                          className="w-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="billing-info py-4">
                <h1 className="text-xl font-bold mb-4">Billing Information</h1>
                <div className="form-check">
                  <input
                    className="default:ring-2 border w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label inline-block font-semibold text-gray-800"
                    htmlFor="flexCheckDefault"
                  >
                    Same as Shipping Information
                  </label>
                </div>
                <hr className="my-6" />
                <button className="flex ml-auto items-center text-white bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-600/50 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 cursor-pointer">
                  <GrCreditCard className="mr-2" /> Pay Now
                </button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 bg-blue-900 text-white p-8">
              <div className="w-full sideCart">
                <h5>Amount Due</h5>
                <h2 className="font-bold text-3xl">Rs500.00</h2>
                <ul>
                  {Object.keys(cart).length == 0 && (
                    <div className="my-5">No items in the cart</div>
                  )}
                  {Object.keys(cart).map((k) => {
                    return (
                      <li key={k} className="my-10">
                        <div className="flex">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-white border-gray-200 mr-3">
                            <img
                              src="https://m.media-amazon.com/images/I/61R0oSuKMLL._AC_UX569_.jpg"
                              alt="T-shirt black"
                              className="h-full w-full object-contain object-center"
                            />
                          </div>
                          <div className="w-3/5 flex font-semibold">
                            {cart[k].name}
                          </div>
                          <div className="w-2/5 flex justify-end font-semibold">
                            ₨{cart[k].price}
                          </div>
                        </div>
                        <hr className="my-6" />
                      </li>
                    );
                  })}
                </ul>
                <div className="calc">
                  <div
                    className="text-blue-200 flex justify-between mb-6"
                    id="sub_total"
                  >
                    <h5>Subtotal</h5>
                    <p>Rs{subTotal}</p>
                  </div>
                  <div
                    className="text-blue-200 flex justify-between mb-6"
                    id="shipping"
                  >
                    <h5>Shipping</h5>
                    <p>Rs50.00</p>
                  </div>
                  <div
                    className="text-blue-200 flex justify-between mb-5"
                    id="taxes"
                  >
                    <h5>Taxes</h5>
                    <p>Rs60.00</p>
                  </div>
                  <hr className="my-6" />
                  <div
                    className="text-white flex justify-between mb-5 font-semibold"
                    id="total"
                  >
                    <h5>Total</h5>
                    <p>Rs700.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
