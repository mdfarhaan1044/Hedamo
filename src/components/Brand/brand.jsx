"use client";
import React from "react";

export default function Brand({ product }) {
  if (!product) return null; 

  return (
    <div key={product.id}>
      <h1>{product.brand}</h1>
    </div>
  );
}
