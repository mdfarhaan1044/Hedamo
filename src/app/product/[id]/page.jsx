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
    <div
      className="bg-gradient-to-r from-amber-600 to-orange-600
 py-10 px-6 flex flex-col items-center"
    >
      <div className="flex justify-center mb-8 w-full">
        <Title product={product} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-8">
        <div className="flex justify-center h-[200px]">
          <Stock product={product} />
        </div>

        <div className="flex justify-center h-[200px]">
          <Price product={product} />
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-[40px] F p-4 transition-all duration-300 hover:scale-105 hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-2xl w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-8">
        <div className="flex justify-center">
          <Description product={product} />
        </div>
        <div className="flex justify-center">
          {product.brand ? (
            <Brand product={product} />
          ) : (
            <Tags product={product} />
          )}
        </div>

        <div className="flex justify-center">
          <ShippingInfo product={product} />
        </div>
      </div>

      <div className="w-fit ">
        <Reviews product={product} />
      </div>
    </div>
  );
}
