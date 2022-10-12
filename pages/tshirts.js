import React from 'react';
import Link from 'next/link';
import mongoose from 'mongoose';
import Image from 'next/image';
import Product from '../models/Product';

const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item._id}>
                  <Link href={`/products/${item.slug}`}>
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        alt="ecommerce"
                        className="object-scale-down object-top w-full h-full block"
                        src={item.img}
                        layout="fill"
                      />
                    </a>
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.category.toUpperCase()}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1">₨{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: 't-shirts' });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Tshirts;
