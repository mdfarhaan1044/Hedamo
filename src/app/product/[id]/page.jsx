"use client";
import { useEffect, useState } from "react";
import React from "react";

import { productsService } from "../../../services/products.service";
import Brand from "../../../components/Brand/brand";
import Price from "../../../components/Price/price";
import Title from "../../../components/Title/title";
import Stock from "../../../components/Stock/stock";
import Description from "../../../components/Description/desc";
import Reviews from "../../../components/Reviews/review";
import ShippingInfo from "../../../components/ShippingInfo/shippingInfo";

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
     
      <img src={product.thumbnail} alt={product.title} className="mb-2" />
      <Reviews product={product} />
      <ShippingInfo product={product} />
          <Description product={product} />
          <Stock product={product} />
          <Title product={product} />
          <Brand product={product} /> 
          <Price product={product} /> 
    </div>
  );
}
