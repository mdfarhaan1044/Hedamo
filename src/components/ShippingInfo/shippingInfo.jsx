"use client";
import React from "react";

export default function ShippingInfo({ product }) {
  if (!product) return null;

  return (
    <div
      style={{ background: "var(--color-info)", color: "var(--color-heading)" }}
      className="w-full max-w-md  rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25)]
 px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] space-y-3"
    >
      <h2 className="text-lg font-bold  text-center mb-2">
        Shipping & Warranty
      </h2>

      <div
        className="bg-[#f0f0f0] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)]
 p-4"
      >
        <p className="text-sm font-medium ">
          <span className="font-semibold">Warranty: </span>
          {product.warrantyInformation}
        </p>
      </div>

      <div
        className="bg-[#f0f0f0] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)]
 p-4"
      >
        <p className="text-sm font-medium">
          <span className="font-semibold">Shipping: </span>
          {product.shippingInformation}
        </p>
      </div>

      <div
        className="bg-[#f0f0f0] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)]
p-4"
      >
        <p className="text-sm font-medium ">
          <span className="font-semibold">Status: </span>
          {product.availabilityStatus}
        </p>
      </div>
    </div>
  );
}
