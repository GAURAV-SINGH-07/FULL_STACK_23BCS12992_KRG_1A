import React from "react";

function ProductCard({ name, price, description, instock }) {
  return (
    <div className="border rounded-lg p-6 max-w-xs text-center shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 font-medium">Price: ${price}</p>
      <p className="text-gray-500 mb-4">{description}</p>
      
      {instock ? (
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Buy Now
        </button>
      ) : (
        <button 
          className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed" 
          disabled
        >
          Out of Stock
        </button>
      )}
    </div>
  );
}

export default ProductCard;