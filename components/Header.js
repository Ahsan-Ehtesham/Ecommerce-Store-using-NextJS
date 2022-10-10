import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <img src="/Header_img.jpg" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Popular Products
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Exclusively selected our best products which are selling online
              from our top ecommerce store, Live to wear these cool awesome
              products.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg h-full">
                <div className="bg-white p-2 mb-2 rounded-lg">
                  <Image
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src="/tshirt.jpg"
                    width={720}
                    height={400}
                    alt="content"
                  />
                </div>

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  T-SHIRTS
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Gildan Men&apos;s Ultra Cotton T-Shirt
                </h2>
                <p className="leading-relaxed text-base">
                  100% cotton, this classic fit preshrunk jersey knit provides
                  unmatched comfort with each wear.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg h-full">
                <div className="bg-white p-2 mb-2 rounded-lg">
                  <Image
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src="/hoodies.jpg"
                    width={721}
                    height={401}
                    alt="content"
                  />
                </div>

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  HOODIES
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Gildan Adult Fleece Hoodie
                </h2>
                <p className="leading-relaxed text-base">
                  Equal parts durable, comfortable and stylish, the Gildan Adult
                  Fleece Hooded Sweatshirt belongs in every collection.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg h-full">
                <div className="bg-white p-2 mb-2 rounded-lg">
                  <Image
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src="/watches.jpg"
                    width={722}
                    height={402}
                    alt="content"
                  />
                </div>

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  WATCHES
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Fossil Men&apos;s Quartz Chronograph Watch
                </h2>
                <p className="leading-relaxed text-base">
                  Military-inspired design with oversized lugs and bold details
                  offers a laid-back yet rugged feel that is perfect for any
                  adventure, day or night.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg h-full">
                <div className="bg-white p-2 mb-2 rounded-lg">
                  <Image
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src="/stickers.jpg"
                    width={723}
                    height={403}
                    alt="content"
                  />
                </div>

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  STICKERS
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Goku and Vegeta Sticker
                </h2>
                <p className="leading-relaxed text-base">
                  High quality decal die-cut laptop sticker in black color.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn&apos;t care if you live or
                die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
