import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/addToCart";

export default function Card({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return null;

  const hasOffer = product.offerPrice && product.offerPrice < product.price;
  const discountPercentage = hasOffer
    ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
    : 0;

  const displayPrice = hasOffer ? product.offerPrice : product.price;
  const primaryImage =
    product.images && product.images.length > 0
      ? product.images[0].url
      : "/placeholder-image.jpg";

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(product, 1);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-4 relative flex flex-col justify-between min-h-[340px] hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Offer badge */}
      {hasOffer && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-lg z-10 font-semibold">
          -{discountPercentage}%
        </span>
      )}

      {/* Product image */}
      <div className="flex-1 flex items-center justify-center mb-4">
        <img
          src={primaryImage}
          alt={product.name}
          className="object-contain h-40 w-full rounded-lg bg-gray-100"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
          }}
        />
      </div>

      {/* Product info */}
      <div className="mt-2">
        <h3
          className="font-semibold text-lg text-gray-900 mb-1 truncate"
          title={product.name}
        >
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="flex items-center gap-2 mb-2">
          {hasOffer ? (
            <>
              <span className="text-xl font-bold text-green-600">
                ${displayPrice}
              </span>
              <span className="text-sm line-through text-gray-400">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
          )}
        </div>

        {/* Stock info */}
        <div className="text-xs text-gray-500">
          {product.quantity > 0 ? (
            <span className="text-green-600">
              In Stock ({product.quantity})
            </span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </div>
      </div>

      {/* Add to cart button */}
      <button
        className="absolute bottom-4 right-4 bg-gray-900 text-white rounded-full p-2 hover:bg-blue-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={product.quantity === 0}
        onClick={handleAddToCart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
