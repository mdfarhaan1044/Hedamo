"use client";
import React from "react";

export default function Title({ product }) {
  if (!product) return null; 

  return (
    <div key={product.id}>
      <h1>{product.title}</h1>
    </div>
  );
}