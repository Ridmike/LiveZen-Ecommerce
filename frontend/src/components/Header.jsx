import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import { useCart } from "../hooks/addToCart";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartCount } = useCart();
  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
    getSearchSuggestions,
    clearSearch,
    performSearch,
  } = useSearch();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || "");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  // Clear search when navigating away from search pages
  useEffect(() => {
    if (!location.pathname.startsWith("/search")) {
      if (searchTerm) {
        clearSearch();
        setLocalSearchTerm("");
      }
    }
  }, [location.pathname, searchTerm, clearSearch]);

  // Update local search term when global search term changes
  useEffect(() => {
    setLocalSearchTerm(searchTerm || "");
  }, [searchTerm]);

  useEffect(() => {
    if (localSearchTerm.trim() && localSearchTerm.length > 1) {
      const newSuggestions = getSearchSuggestions(localSearchTerm);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [localSearchTerm, getSearchSuggestions]);

  // Close suggestions when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearchTerm.trim()) {
      handleSearch(localSearchTerm);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocalSearchTerm(suggestion);

    // For suggestions, bypass the loading check since suggestions only appear when products are loaded
    setSearchTerm(suggestion);
    performSearch(suggestion);

    // Small delay to ensure search completes before navigation
    setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    }, 50);

    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleInputFocus = () => {
    if (localSearchTerm.trim() && localSearchTerm.length > 1) {
      const newSuggestions = getSearchSuggestions(localSearchTerm);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => {
      setShowSuggestions(false);
    }, 150);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">ShopBox</h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
            <Link
              to="/all-products"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              All Products
            </Link>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Categories
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div
            className="hidden md:flex items-center flex-1 max-w-lg mx-8"
            ref={searchRef}
          >
            <div className="relative w-full">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={localSearchTerm}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <button
                  type="submit"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    if (localSearchTerm.trim()) {
                      handleSearch(localSearchTerm);
                      setShowSuggestions(false);
                    }
                  }}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full text-sm transition-colors ${"bg-blue-600 hover:bg-blue-700"}`}
                >
                  Search
                </button>
              </form>

              {/* Search Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSuggestionClick(suggestion);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            {/* Wishlist */}
            {/* <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button> */}
            {/* Shopping Cart */}
            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 16h12M7 13v4a1 1 0 001 1h8a1 1 0 001-1v-4m-8 0V9a1 1 0 011-1h6a1 1 0 011 1v4"
                />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
