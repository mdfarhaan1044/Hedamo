"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { productsService } from "../../services/products.service";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    productsService.fetchProducts().then(setProducts);
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-3 gap-4 m-4 p-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-orange-200 flex flex-col item-center border border-black rounded-xl shadow-md p-4 transition-all"
        >
          <div className="flex flex-col justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="border border-black rounded-xl"
            />
            <h2 className="text-xl font-bold">{product.title}</h2>
          </div>
          <p className="text-lg font-bold mt-2">${product.price}</p>
          <p className="text-sm">Stock: {product.stock}</p>

          {expanded[product.id] && (
            <p className="text-sm mt-2">{product.description}</p>
          )}

          <div className="flex flex-row grid grid-cols-2 gap-5"> 
            <button
              className="text-white mt-1 bg-orange-500 border border-white rounded-3xl p-3 cursor-pointer"
              onClick={() => toggleExpand(product.id)}
            >
              {expanded[product.id] ? "View less" : "View more"}
            </button>
            <Link href={`/product/${product.id}`}
              className="text-center text-white mt-1 bg-amber-900 border border-white rounded-3xl p-3 cursor-pointer">
                Details
              
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
