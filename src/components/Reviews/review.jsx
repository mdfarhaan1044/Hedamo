"use client";
import React from "react";
import { Star } from "lucide-react";

export default function Reviews({ product }) {
  if (!product) return null;

  return (
    <div
      key={product.id}
      className="w-[100vh]  bg-gradient-to-r from-purple-500 to-indigo-600 rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25)]
 p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
    >
      <h2 className="text-xl font-bold text-black text-center">Reviews</h2>

      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#f0f0f0] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)]
 p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`ml-1 w-6 h-6 ${
                      i < review.rating ? "fill-yellow-500" : "fill-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>

            <p className="text-gray-700 italic">“{review.comment}”</p>

            <div className="text-xs text-gray-500 mt-2">
              <p className="font-medium">{review.reviewerName}</p>
              <p>{review.reviewerEmail}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 italic text-center">No reviews yet</p>
      )}
    </div>
  );
}
