"use client";
import React from "react";

export default function Price({ product }) {
  if (!product) return null;

  return (
    <div
      key={product.id}
      className="w-fit max-w-[90%] bg-[#e0e0e0] rounded-[30px] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] px-10 py-6 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
    >
      <h1 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-wide">
        <span className="font-medium text-gray-700">Price:</span> ${product.price}
      </h1>
    </div>
  );
}
