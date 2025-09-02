"use client";
import React from "react";
import { Star } from "lucide-react";

export default function Reviews({ product }) {
  if (!product) return null;

  return (
    <div
      className="w-full max-w-full mx-auto p-5 bg-[#f0f0f0] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] 
  transition-all duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:scale-[1.02]"
    >
      <h2
        className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center mb-6 p-5  bg-gradient-to-r from-purple-500 to-indigo-600 
                         rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                         p-4 sm:p-6 md:p-7 space-y-3 md:space-y-4
                         transition-all duration-300 
                         hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
      >
        Reviews
      </h2>

      {product.reviews && product.reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col w-full
                         bg-gradient-to-r from-purple-500 to-indigo-600 
                         rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                         p-4 sm:p-6 md:p-7 space-y-3 md:space-y-4
                         transition-all duration-300 
                         hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${
                        i < review.rating ? "fill-yellow-500" : "fill-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs text-gray-100">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white italic break-words">
                “{review.comment}”
              </p>

              <div className="text-[10px] sm:text-xs md:text-sm text-gray-200 mt-2 break-words">
                <p className="font-medium">{review.reviewerName}</p>
                <p>{review.reviewerEmail}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic text-center text-sm sm:text-base md:text-lg">
          No reviews yet
        </p>
      )}
    </div>
  );
}
