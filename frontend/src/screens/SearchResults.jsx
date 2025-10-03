import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Card from "../components/Card";
import useSearch from "../hooks/useSearch";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const category = searchParams.get("category");

  const {
    searchResults,
    isSearching,
    performSearch,
    searchByCategory,
    setSearchTerm,
  } = useSearch();

  useEffect(() => {
    if (query) {
      setSearchTerm(query);
      performSearch(query);
    } else if (category) {
      searchByCategory(category);
    }
  }, [query, category]); 

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-20">
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2"
        style={{ borderColor: "var(--text)" }}
      ></div>
    </div>
  );

  const NoResults = () => (
    <div className="text-center py-20">
      <div className="max-w-md mx-auto">
        <svg
          className="w-20 h-20 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "var(--gray)" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--text)" }}
        >
          No results found
        </h2>
        <p className="mb-6" style={{ color: "var(--gray)" }}>
          {query
            ? `No products found for "${query}"`
            : "No products found in this category"}
        </p>
        <div className="space-y-3">
          <p className="text-sm" style={{ color: "var(--gray)" }}>
            Try:
          </p>
          <ul className="text-sm space-y-1" style={{ color: "var(--gray)" }}>
            <li>• Using different keywords</li>
            <li>• Searching for more general terms</li>
          </ul>
        </div>
        <Link
          to="/all-products"
          className="inline-block mt-6 px-6 py-2 rounded-lg transition-colors"
          style={{ backgroundColor: "var(--blue)", color: "var(--white)" }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--active)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--blue)")
          }
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Search Results Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--text)" }}
              >
                {query ? `Search Results for "${query}"` : "Category Results"}
              </h1>
              {!isSearching && (
                <p style={{ color: "var(--gray)" }}>
                  {searchResults.length} product
                  {searchResults.length !== 1 ? "s" : ""} found
                </p>
              )}
            </div>
            <Link
              to="/all-products"
              className="font-medium transition-colors"
              style={{ color: "var(--blue)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--active)")
              }
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--blue)")}
            >
              View All Products →
            </Link>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="text-sm mb-6" style={{ color: "var(--gray)" }}>
          <Link
            to="/"
            style={{ color: "var(--gray)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseOut={(e) => (e.currentTarget.style.color = "var(--gray)")}
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: "var(--text)" }}>Search Results : {query}</span>
        </nav>

        {/* Search Results */}
        {isSearching ? (
          <LoadingSpinner />
        ) : searchResults.length === 0 ? (
          <NoResults />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {searchResults.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        )}

        {/* Search Suggestions */}
        {searchResults.length === 0 && !isSearching && (
          <div
            className="mt-12 rounded-lg p-8"
            style={{ backgroundColor: "var(--lightGray)" }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text)" }}
            >
              Popular Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/search?category=electronics"
                className="p-4 rounded-lg hover:shadow-md transition-shadow text-center"
                style={{
                  backgroundColor: "var(--white)",
                  color: "var(--text)",
                }}
              >
                <div className="text-2xl mb-2">📱</div>
                <span className="text-sm font-medium">Electronics</span>
              </Link>
              <Link
                to="/search?category=fashion"
                className="p-4 rounded-lg hover:shadow-md transition-shadow text-center"
                style={{
                  backgroundColor: "var(--white)",
                  color: "var(--text)",
                }}
              >
                <div className="text-2xl mb-2">👕</div>
                <span className="text-sm font-medium">Fashion</span>
              </Link>
              <Link
                to="/search?category=home"
                className="p-4 rounded-lg hover:shadow-md transition-shadow text-center"
                style={{
                  backgroundColor: "var(--white)",
                  color: "var(--text)",
                }}
              >
                <div className="text-2xl mb-2">🏠</div>
                <span className="text-sm font-medium">Home & Garden</span>
              </Link>
              <Link
                to="/search?category=sports"
                className="p-4 rounded-lg hover:shadow-md transition-shadow text-center"
                style={{
                  backgroundColor: "var(--white)",
                  color: "var(--text)",
                }}
              >
                <div className="text-2xl mb-2">⚽</div>
                <span className="text-sm font-medium">Sports</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
