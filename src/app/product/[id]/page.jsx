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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-10 px-4">
      
<div className="flex justify-center mb-8">
  <Title product={product} />
</div>


<div className="flex justify-center mb-10">
  <div className="bg-[#e0e0e0] rounded-[40px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] p-4 transition-all duration-300 hover:scale-105 hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
    <img
      src={product.thumbnail}
      alt={product.title}
      className="rounded-2xl w-full max-w-md object-cover"
    />
  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="">
          <Stock product={product} />
        </div>

        <div className=" ">
          <Brand product={product} />
        </div>

        <div className="">
          <Price product={product} />
        </div>

        <div className="">
          <Description product={product} />
        </div>

        <div className="">
          <Reviews product={product} />
        </div>

        <div className="">
          <ShippingInfo product={product} />
        </div>

      </div>
    </div>
  );
}
