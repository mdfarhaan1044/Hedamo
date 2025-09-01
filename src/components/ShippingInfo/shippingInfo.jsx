"use client";
import React from "react";

export default function ShippingInfo({ product }) {
  if (!product) return null;

  return (
    <div
      key={product.id}
      className="w-full max-w-md bg-[#e0e0e0] rounded-[30px] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] space-y-3"
    >
      <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
        Shipping & Warranty
      </h2>

      <div className="bg-[#f0f0f0] rounded-2xl shadow-[5px_5px_10px_#cfcfcf,-5px_-5px_10px_#ffffff] p-4">
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold">Warranty: </span>
          {product.warrantyInformation}
        </p>
      </div>

      <div className="bg-[#f0f0f0] rounded-2xl shadow-[5px_5px_10px_#cfcfcf,-5px_-5px_10px_#ffffff] p-4">
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold">Shipping: </span>
          {product.shippingInformation}
        </p>
      </div>

      <div className="bg-[#f0f0f0] rounded-2xl shadow-[5px_5px_10px_#cfcfcf,-5px_-5px_10px_#ffffff] p-4">
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold">Status: </span>
          {product.availabilityStatus}
        </p>
      </div>
    </div>
  );
}
