import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/addToCart";

export default function OrderSummary() {
  const { getCartCount, getCartTotal, getCartTotalWithTax  } = useCart();
  const formatPrice = (price) => `$${price.toFixed(2)}`;
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">
              Subtotal ({getCartCount()} items)
            </span>
            <span className="font-medium">{formatPrice(getCartTotal())}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">
              {formatPrice(getCartTotal() * 0.1)}
            </span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{(getCartTotalWithTax())}</span>
          </div>
        </div>
        <Link to="/payment" className="block text-center w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4">
          Proceed to Checkout
        </Link>
        <Link
          to="/all-products"
          className="w-full block text-center text-blue-600 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
