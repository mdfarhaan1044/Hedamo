"use client";
import React from "react";

export default function ShippingInfo({ product }) {
  if (!product) return null; 

  return (
    <div key={product.id}>
      <h1>{product.warrantyInformation}</h1>
      <h1>{product.shippingInformation}</h1>
      <h1>{product.availabilityStatus}</h1>
    </div>
  );
}