"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { productsService } from "../../services/products.service";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [expandedId, setExpandedId] = useState(null); // ← single expanded card

  useEffect(() => {
    productsService.fetchProducts().then(setProducts);
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id)); // collapse others
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {products.map((product) => {
        const isExpanded = expandedId === product.id;

        return (
          <div
            key={product.id}
            className="group w-[260px] bg-[#e0e0e0] rounded-xl overflow-hidden mx-auto
                       shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* tools bar */}
            <div className="flex items-center gap-2 p-3">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            {/* content */}
            <div className="p-4 flex flex-col text-black">
              {/* image */}
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* info */}
              <h2 className="text-lg font-semibold transition-colors group-hover:text-indigo-600">
                {product.title}
              </h2>
              <p className="text-green-600 font-semibold mt-1">${product.price}</p>
              <p className="text-sm text-gray-700">Stock: {product.stock}</p>

              {/* expand */}
              {isExpanded && (
                <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* actions */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => toggleExpand(product.id)}
                  aria-expanded={isExpanded}
                  className="flex-1 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600
                             rounded-lg py-2 px-3 shadow-md transition duration-200
                             hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isExpanded ? "View less" : "View more"}
                </button>
                <Link
                  href={`/product/${product.id}`}
                  className="flex-1 text-sm font-medium text-center text-white bg-gradient-to-r from-amber-600 to-orange-600
                             rounded-lg py-2 px-3 shadow-md transition duration-200
                             hover:from-amber-700 hover:to-orange-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
