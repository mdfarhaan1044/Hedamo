"use client";
import { useEffect, useState } from "react";
import { productsService } from "../../../services/products.service";
import Brand from "../../../components/Brand/brand";
import React from "react";
import Price from "../../../components/Price/price";

export default function ProductPage({ params }) {
  const { id } = React.use(params);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productsService.fetchProducts().then((allProducts) => {
      const found = allProducts.find((p) => String(p.id) === String(id));
      setProduct(found);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div key={product.id}>
      <h1>Product Page {product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="mb-2" />
      <p>{product.description}</p>
    
      <p>Stock: {product.stock}</p>
          <Brand product={product} /> 
          <Price product={product} /> 
    </div>
  );
}
