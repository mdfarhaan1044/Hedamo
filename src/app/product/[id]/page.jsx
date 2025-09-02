"use client";
import { useEffect, useState } from "react";
import React from "react";

import { productsService } from "../../../services/products.service";
import Brand from "../../../components/Brand/brand";
import Price from "../../../components/Price/price";
import Title from "../../../components/Title/title";
import Stock from "../../../components/Stock/stock";
import Description from "../../../components/Description/desc";
import Reviews from "../../../components/Reviews/review";
import ShippingInfo from "../../../components/ShippingInfo/shippingInfo";
import Tags from "../../../components/Tags/tags";

export default function ProductPage({ params }) {
  const { id } = React.use(params);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productsService.fetchProducts().then((allProducts) => {
      const found = allProducts.find((p) => String(p.id) === String(id));
      setProduct(found);
    });
  }, [id]);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className=" min-h-screen py-8 px-4 sm:px-6 lg:px-12 flex flex-col items-center">
      <div className="flex justify-center mb-6 w-full">
        <Title product={product} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-8">
        <div className="flex justify-center">
          <div className=" rounded-[40px] p-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Stock product={product} />
          <Price product={product} />
          <div className="flex justify-center">
            {product.brand ? (
              <Brand product={product} />
            ) : (
              <Tags product={product} />
            )}
          </div>
        </div>

        <div className="flex justify-center text-center md:text-left">
          <Description product={product} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mb-8">
        <div className="flex justify-center md:justify-start">
          <Reviews product={product} />
        </div>
        <div className="flex justify-center md:justify-end">
          <ShippingInfo product={product} />
        </div>
      </div>
    </div>
  );
}
