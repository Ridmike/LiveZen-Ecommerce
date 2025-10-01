import React, { useState } from "react";
import Card from "../components/Card";
import useProducts from "../hooks/useProducts";

export default function AllProducts() {
  const { products, loading, error, refetch } = useProducts();
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  // Filter products based on local search and filters (not global search)
  const getFilteredProducts = () => {
    let filtered = [...products];

    // Local search filter (only if user searches within this page)
    if (localSearchTerm.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
          (product.description &&
            product.description
              .toLowerCase()
              .includes(localSearchTerm.toLowerCase()))
      );
    }

    // Price filter
    if (filterBy === "under-50") {
      filtered = filtered.filter((product) => product.price < 50);
    } else if (filterBy === "50-100") {
      filtered = filtered.filter(
        (product) => product.price >= 50 && product.price <= 100
      );
    } else if (filterBy === "over-100") {
      filtered = filtered.filter((product) => product.price > 100);
    } else if (filterBy === "sale") {
      filtered = filtered.filter(
        (product) => product.offerPrice && product.offerPrice < product.price
      );
    }

    // Sort products
    if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price-low") {
      filtered.sort(
        (a, b) => (a.offerPrice || a.price) - (b.offerPrice || b.price)
      );
    } else if (sortBy === "price-high") {
      filtered.sort(
        (a, b) => (b.offerPrice || b.price) - (a.offerPrice || a.price)
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );

  const ErrorMessage = () => (
    <div className="flex justify-center items-center py-20">
      <div className="text-center">
        <p className="text-red-600 text-lg mb-4">Failed to load products</p>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={refetch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  const ProductsGrid = () => {
    if (filteredProducts.length === 0) {
      return (
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-gray-600 text-lg">
            {localSearchTerm
              ? "No products found matching your search"
              : "No products available"}
          </p>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8">
        {/* Header with filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
            <p className="text-gray-600 mt-1">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""} found
              {localSearchTerm && <span> for "{localSearchTerm}"</span>}
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Products</option>
              <option value="sale">On Sale</option>
              <option value="under-50">Under $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="over-100">Over $100</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {!loading && !error && <ProductsGrid />}
    </div>
  );
}
