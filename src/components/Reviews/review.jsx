"use client";
import React from "react";

export default function Reviews({ product }) {
  if (!product) return null;

  return (
    <div
      key={product.id}
      className="w-full max-w-xl bg-[#e0e0e0] rounded-[30px] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
    >
      <h2 className="text-xl font-bold text-gray-800 text-center">Reviews</h2>

      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#f0f0f0] rounded-2xl shadow-[5px_5px_10px_#cfcfcf,-5px_-5px_10px_#ffffff] p-4 space-y-2"
          >
            {/* Rating */}
            <div className="flex items-center justify-between">
              <span className="text-yellow-500 font-bold text-lg">
                {review.rating} ⭐
              </span>
              <span className="text-xs text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>

            {/* Comment */}
            <p className="text-gray-700 italic">“{review.comment}”</p>

            {/* Reviewer Info */}
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
