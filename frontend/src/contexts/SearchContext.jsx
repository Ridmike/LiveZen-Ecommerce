import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const addToHistory = (term) => {
    if (term && !searchHistory.includes(term)) {
      setSearchHistory((prev) => [term, ...prev.slice(0, 4)]); // Keep last 5 searches
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setIsSearching(false);
  };

  const value = {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    isSearching,
    setIsSearching,
    searchHistory,
    addToHistory,
    clearSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
