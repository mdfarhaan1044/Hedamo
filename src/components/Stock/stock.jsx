"use client";
import React from "react";

export default function Stock({ product }) {
  if (!product) return null; 

  return (
    <div key={product.id}>
      <h1>{product.stock}</h1>
    </div>
  );
}