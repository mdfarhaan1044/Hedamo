"use client";
import React from "react";

export default function Stock({ product }) {
  if (!product) return null;

  const inStock = product.stock > 0;

  return (
    <div
      className="w-full max-w-xs bg-gradient-to-r from-purple-500 to-indigo-600 rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25)]
 px-2 py-2 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
    >
      <h2 className="text-lg font-bold text-black mb-2">Stock Status</h2>
      <span
        className={`text-xl font-extrabold ${
          inStock ? "text-white" : "text-red-500"
        }`}
      >
        {inStock ? `${product.stock} Available` : "Out of Stock"}
      </span>
    </div>
  );
}
