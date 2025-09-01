"use client";
import React from "react";

export default function Price({ product }) {
  if (!product) return null;

  return (
    <div
      key={product.id}
      className="w-fit max-w-[90%] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25)]
 px-10 py-6 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
    >
      <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
        <span className="font-bold text-black">Price:</span> ${product.price}
      </h1>
    </div>
  );
}
