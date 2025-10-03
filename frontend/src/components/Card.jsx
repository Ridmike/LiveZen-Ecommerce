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
      className="rounded-xl shadow-lg p-4 relative flex flex-col justify-between min-h-[340px] hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      style={{ background: "var(--white)" }}
      onClick={handleCardClick}
    >
      {/* Offer badge */}
      {hasOffer && (
        <span
          className="absolute top-4 left-4 text-xs px-2 py-1 rounded-lg z-10 font-semibold"
          style={{ background: "var(--red)", color: "var(--white)" }}
        >
          -{discountPercentage}%
        </span>
      )}

      {/* Product image */}
      <div className="flex-1 flex items-center justify-center mb-4">
        <img
          src={primaryImage}
          alt={product.name}
          className="object-contain h-40 w-full rounded-lg"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
          }}
        />
      </div>

      {/* Product info */}
      <div className="mt-2">
        <h3
          className="font-semibold text-lg mb-1 truncate"
          style={{ color: "var(--text)" }}
          title={product.name}
        >
          {product.name}
        </h3>
        {product.description && (
          <p
            className="text-sm mb-2 line-clamp-2"
            style={{ color: "var(--gray)" }}
          >
            {product.description}
          </p>
        )}
        <div className="flex items-center gap-2 mb-2">
          {hasOffer ? (
            <>
              <span
                className="text-xl font-bold"
                style={{ color: "var(--green)" }}
              >
                ${displayPrice}
              </span>
              <span
                className="text-sm line-through"
                style={{ color: "var(--gray)" }}
              >
                ${product.price}
              </span>
            </>
          ) : (
            <span
              className="text-xl font-bold"
              style={{ color: "var(--text)" }}
            >
              ${product.price}
            </span>
          )}
        </div>

        {/* Stock info */}
        <div className="text-xs">
          {product.quantity > 0 ? (
            <span style={{ color: "var(--green)" }}>
              In Stock ({product.quantity})
            </span>
          ) : (
            <span style={{ color: "var(--red)" }}>Out of Stock</span>
          )}
        </div>
      </div>

      {/* Add to cart button */}
      <button
        className="absolute bottom-4 right-4 rounded-full p-2 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          background: "var(--black)",
          color: "var(--white)",
        }}
        disabled={product.quantity === 0}
        onClick={handleAddToCart}
        onMouseOver={(e) => (e.currentTarget.style.background = "var(--blue)")}
        onMouseOut={(e) => (e.currentTarget.style.background = "var(--black)")}
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
