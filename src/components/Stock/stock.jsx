"use client";
import React from "react";

export default function Stock({ product }) {
  if (!product) return null;

  const inStock = product.stock > 0;

  return (
    <div
      key={product.id}
      className="w-full max-w-xs bg-[#e0e0e0] rounded-[30px] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] px-8 py-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
    >
      <h2 className="text-lg font-bold text-gray-800 mb-2">Stock Status</h2>
      <span
        className={`text-xl font-extrabold ${
          inStock ? "text-green-600" : "text-red-500"
        }`}
      >
        {inStock ? `${product.stock} Available` : "Out of Stock"}
      </span>
    </div>
  );
}
