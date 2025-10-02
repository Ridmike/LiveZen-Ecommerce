import React from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProducts from "./screens/AllProducts";
import ProductDetails from "./screens/ProductDetails";
import SearchResults from "./screens/SearchResults";
import CartScreen from "./screens/CartScreen";
import { SearchProvider } from "./contexts/SearchContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./screens/ContactUs";
import PopUpNotification from "./widget/PopUpNotification";
import PaymentScreen from "./screens/PaymentScreen";

export default function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Router>
          <Header />
          <PopUpNotification />
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/payment" element={<PaymentScreen />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </SearchProvider>
  );
}
