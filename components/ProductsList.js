import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ item }) => {
  return (
    <div className="p-4 md:w-1/2 xl:w-1/4">
      <div className="h-full rounded-lg bg-gray-100 p-6">
        <div className="mb-2 rounded-lg bg-white p-2">
          <Image
            className="mb-6 h-40 w-full rounded object-contain object-center"
            src={item.img}
            width={721}
            height={401}
            alt="content"
          />
        </div>

        <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
          {item.slug}
        </h3>
        <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
          {item.title}
        </h2>
        <p className="text-base leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

export default function ProductList() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch('/api/getproducts')
      .then((res) => res.json())
      .then((allProducts) => setAllProducts(allProducts.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-10">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              Popular Products
            </h1>
            <div className="h-1 w-20 rounded bg-gradient-to-r from-indigo-500 to-blue-500"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            Exclusively selected our best products which are selling online from
            our top ecommerce store, Live to wear these cool awesome products.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {allProducts?.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
