"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { productsService } from "../../services/products.service";



export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [bgClasses, setBgClasses] = useState({});

  useEffect(() => {
    const colors = ["#2F4F4F", "#F5C97A", "#FDF6E3"];
    const assigned = {};

    products.forEach((product) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      assigned[product.id] = randomColor;
    });

    setBgClasses(assigned);
  }, [products]);


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
          style={{ backgroundColor: bgClasses[product.id] }}
          className='flex flex-col border border-black rounded-xl shadow-md p-4 transition-all'
        >
          <div className="cursor-pointer" >
            <Link href={`/product/${product.id}`}>
            <img src={product.thumbnail} alt={product.title} className="mb-2" />
            <h2 className="text-xl font-bold">{product.title}</h2>
            </Link>
          </div>

          {expanded[product.id] && (
            <p className="text-sm mt-2">{product.description}</p>
          )}

          <p className="text-lg font-bold mt-2">${product.price}</p>
          <p className="text-sm">Stock: {product.stock}</p>

          <button
            className="text-blue-600 mt-2 underline cursor-pointer"
            onClick={() => toggleExpand(product.id)}
          >
            {expanded[product.id] ? "View less" : "View more"}
          </button>
        </div>
      ))}
    </div>
  );
}
