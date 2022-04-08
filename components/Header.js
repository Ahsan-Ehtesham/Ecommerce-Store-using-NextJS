import React from 'react'
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <img src="/Header_img.jpg" />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Popular Products</h1>
                            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Exclusively selected our best products which are selling online from our top ecommerce store, Live to wear these cool awesome products.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg h-full">
                                <Image className="h-40 rounded w-full object-contain object-center mb-6" src="/tshirt.jpg" width={720} height={400} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">T-SHIRTS</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Gildan Men's Ultra Cotton T-Shirt</h2>
                                <p className="leading-relaxed text-base">100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg h-full">
                                <img className="h-40 rounded w-full object-contain object-center mb-6" src="/hoodies.jpg" width={721} height={401} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">HOODIES</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Gildan Adult Fleece Hoodie</h2>
                                <p className="leading-relaxed text-base">Equal parts durable, comfortable and stylish, the Gildan Adult Fleece Hooded Sweatshirt belongs in every collection.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg h-full">
                                <img className="h-40 rounded w-full object-contain object-center mb-6" src="/watches.jpg" width={722} height={402} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">WATCHES</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Fossil Men's Quartz Chronograph Watch</h2>
                                <p className="leading-relaxed text-base">Military-inspired design with oversized lugs and bold details offers a laid-back yet rugged feel that is perfect for any adventure, day or night.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg h-full">
                                <img className="h-40 rounded w-full object-contain object-center mb-6" src="/stickers.jpg" width={723} height={403} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">STICKERS</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Goku and Vegeta Sticker</h2>
                                <p className="leading-relaxed text-base">High quality decal die-cut laptop sticker in black color.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Header