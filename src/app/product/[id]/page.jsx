"use client";
import { useEffect, useState } from "react";
import { productsService } from "../../../services/products.service";
import React from "react";

export default  function ProductPage({ params }) {
    const { id } = React.use(params);
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
       
    
        productsService.fetchProducts().then((allProducts) => {
          const found = allProducts.find((p) => String(p.id) === String(id)); 
          setProduct(found);
        });
      }, [id]);

    return (
        <div  key={product.id}>
            <h1>Product Page {product.title}</h1>
            <img src={product.thumbnail} alt={product.title} className="mb-2" />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
}