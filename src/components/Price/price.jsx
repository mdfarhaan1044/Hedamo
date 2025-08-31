"use client";
import React from "react";

export default function Price({ product }) {
  if (!product) return null; 

  return (
    <div key={product.id}>
      <h1>{product.price}</h1>
    </div>
  );
}