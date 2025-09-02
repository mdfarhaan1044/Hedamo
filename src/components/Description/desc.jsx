"use client";
import React from "react";

export default function Description({ product }) {
  if (!product) return null;

  return (
    <div
      style={{ background: "var(--color-desc)", color: "var(--color-heading)" }}
      className="w-full max-w-[90%]  rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25)]
 px-8 py-6 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
    >
      <p className="text-sm md:text-base font-bold   leading-relaxed text-center">
        Description:{" "}
        <span className="font-bold text-white"> {product.description}</span>
      </p>
    </div>
  );
}
