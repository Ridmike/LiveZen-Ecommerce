import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Card from "../components/Card";
import useProducts from "../hooks/useProducts";

export default function Home() {
  const { products, loading, error } = useProducts();

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );

  const ProductsSection = () => {
    // Ensure products is an array before calling slice
    const productsArray = Array.isArray(products) ? products : [];
    const featuredProducts = productsArray.slice(0, 4);

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-900  text-center">
            Featured Products
          </h2>
          <div className="text-xl font-semibold text-black self-center bg-black/10 px-4 py-2 rounded-lg">
            <a href="/all-products">All Products</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <HeroSection />

      {loading && <LoadingSpinner />}
      {/* {error && <ErrorMessage />} */}
      {!loading && !error && <ProductsSection />}
      
    </div>
  );
}
