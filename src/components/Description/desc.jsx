"use client";
import React from "react";

export default function Description({ product }) {
  if (!product) return null; 

  return (
    <div key={product.id}>
      <h1>{product.description}</h1>
    </div>
  );
}