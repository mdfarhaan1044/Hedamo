"use client";
import React from "react";

export default function Reviews({ product }) {
  if (!product) return null; 

  return (
    <div key={product.id}>
      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div key={index}>
            <p>{review.rating}⭐ |
           |  {review.comment} |
           |  {review.date} |
           |  {review.reviewerName} |
           |  {review.reviewerEmail}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
  
}