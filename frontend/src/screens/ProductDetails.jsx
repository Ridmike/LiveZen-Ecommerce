import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";
import useProductDetails from "../hooks/userProductDetails";
import Footer from "../components/Footer";
import { useCart } from "../hooks/addToCart";

export default function ProductDetails() {
  const { id } = useParams();
  const { product, relatedProducts, loading, error } = useProductDetails(id);
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2"
          style={{ borderColor: "var(--text)" }}
        ></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div>
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-lg mb-4" style={{ color: "var(--red)" }}>
            Product not found
          </p>
          <p className="mb-4" style={{ color: "var(--gray)" }}>
            {error}
          </p>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg transition-colors"
            style={{
              backgroundColor: "var(--blue)",
              color: "var(--white)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--active)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--blue)")
            }
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  const hasOffer = product.offerPrice && product.offerPrice < product.price;
  const discountPercentage = hasOffer
    ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
    : 0;

  const displayPrice = hasOffer ? product.offerPrice : product.price;
  const images = product.images || [];
  const currentImage = images[selectedImageIndex] || {
    url: "/placeholder-image.jpg",
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.quantity) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm" style={{ color: "var(--gray)" }}>
          <Link
            to="/"
            className=""
            style={{ color: "var(--gray)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseOut={(e) => (e.currentTarget.style.color = "var(--gray)")}
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to="/all-products"
            className=""
            style={{ color: "var(--gray)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseOut={(e) => (e.currentTarget.style.color = "var(--gray)")}
          >
            Products
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: "var(--text)" }}>{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={currentImage.url}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "/placeholder-image.jpg";
                }}
              />
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? "" : ""
                    }`}
                    style={{
                      borderColor:
                        selectedImageIndex === index
                          ? "var(--blue)"
                          : "var(--gray)",
                    }}
                  >
                    <img
                      src={image.url}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-contain "
                      style={{ backgroundColor: "var(--lightGray)" }}
                      onError={(e) => {
                        e.target.src = "/placeholder-image.jpg";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Name & Favorite */}
            <div className="flex justify-between items-start">
              <h1
                className="text-3xl font-bold"
                style={{ color: "var(--text)" }}
              >
                {product.name}
              </h1>
              <button className="p-2 rounded-full">
                <svg
                  className="w-6 h-6"
                  stroke="var(--red)"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                {hasOffer ? (
                  <>
                    <span
                      className="text-3xl font-bold"
                      style={{ color: "var(--green)" }}
                    >
                      ${displayPrice}
                    </span>
                    <span
                      className="text-xl line-through"
                      style={{ color: "var(--gray)" }}
                    >
                      ${product.price}
                    </span>
                    <span
                      className="px-2 py-1 rounded text-sm font-semibold"
                      style={{
                        backgroundColor: "var(--red)",
                        color: "var(--white)",
                      }}
                    >
                      -{discountPercentage}% OFF
                    </span>
                  </>
                ) : (
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    ${product.price}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="leading-relaxed" style={{ color: "var(--gray)" }}>
                  {product.description}
                </p>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium">Quantity:</span>
                <div
                  className="flex items-center rounded-lg"
                  style={{ border: "1px solid var(--gray)" }}
                >
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "var(--white)" }}
                    onMouseOver={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.backgroundColor =
                          "var(--lightGray)";
                      }
                    }}
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--white)")
                    }
                  >
                    -
                  </button>
                  <span
                    className="px-4 py-2"
                    style={{
                      borderLeft: "1px solid var(--gray)",
                      borderRight: "1px solid var(--gray)",
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.quantity}
                    className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "var(--white)" }}
                    onMouseOver={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.backgroundColor =
                          "var(--lightGray)";
                      }
                    }}
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--white)")
                    }
                  >
                    +
                  </button>
                </div>
                <span className="text-sm" style={{ color: "var(--gray)" }}>
                  ({product.quantity} available)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                className="w-full py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={product.quantity === 0}
                style={{
                  backgroundColor: "var(--black)",
                  color: "var(--white)",
                }}
                onMouseOver={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.backgroundColor = "var(--darkGray)";
                  }
                }}
                onMouseOut={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.backgroundColor = "var(--black)";
                  }
                }}
                onClick={() => {
                  addToCart(product, quantity);
                  // Optional: Show success message or reset quantity
                  console.log(`Added ${quantity} ${product.name}(s) to cart`);
                }}
              >
                {product.quantity === 0 ? "Out of Stock" : "Add to Cart"}
              </button>

              <button
                className="w-full py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={product.quantity === 0}
                style={{
                  border: "1px solid var(--black)",
                  backgroundColor: "var(--white)",
                  color: "var(--black)",
                }}
                onMouseOver={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.backgroundColor = "var(--lightGray)";
                  }
                }}
                onMouseOut={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.backgroundColor = "var(--white)";
                  }
                }}
                onClick={() => {
                  console.log("Buy now:", { productId: product._id, quantity });
                }}
              >
                Buy Now
              </button>
            </div>

            {/* Shipping Info */}
            <div className="space-y-2 text-sm">
              <div
                className="flex items-center"
                style={{ color: "var(--gray)" }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                Free shipping over $1000
              </div>
              <div
                className="flex items-center"
                style={{ color: "var(--gray)" }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Delivers in 3 - 7 working days.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: "var(--text)" }}
          >
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct._id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
