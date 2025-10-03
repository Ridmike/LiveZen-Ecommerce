import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../hooks/addToCart";

export default function OrderSummary() {
  const { getCartCount, getCartTotal, getCartTotalWithTax } = useCart();
  const location = useLocation();
  const formatPrice = (price) => `$${price.toFixed(2)}`;
  return (
    <div className="lg:col-span-1">
      <div
        className="rounded-lg shadow-md p-6 sticky top-24"
        style={{ backgroundColor: "var(--white)" }}
      >
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          Order Summary
        </h2>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="" style={{ color: "var(--gray)" }}>
              Subtotal ({getCartCount()} items)
            </span>
            <span className="font-medium">{formatPrice(getCartTotal())}</span>
          </div>
          <div className="flex justify-between">
            <span className="" style={{ color: "var(--gray)" }}>
              Shipping
            </span>
            <span className="font-medium" style={{ color: "var(--green)" }}>
              Free
            </span>
          </div>
          <div className="flex justify-between">
            <span className="" style={{ color: "var(--gray)" }}>
              Tax
            </span>
            <span className="font-medium">
              {formatPrice(getCartTotal() * 0.1)}
            </span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{getCartTotalWithTax()}</span>
          </div>
        </div>
        {location.pathname !== "/payment" && (
          <Link
            to="/payment"
            className="block text-center w-full py-3 rounded-lg transition-colors mb-4"
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
            Proceed to Checkout
          </Link>
        )}
        <Link
          to="/all-products"
          className="w-full block text-center py-2 border rounded-lg transition-colors"
          style={{
            color: "var(--blue)",
            borderColor: "var(--blue)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "var(--lightBlue)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
