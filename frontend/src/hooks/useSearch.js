import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSearchContext } from '../contexts/SearchContext';

export default function useSearch() {
  const navigate = useNavigate();
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    isSearching,
    setIsSearching,
    addToHistory,
    clearSearch
  } = useSearchContext();

  const [allProducts, setAllProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  // Fetch all products for search
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setProductsLoaded(false);
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data.data || response.data || [];
        setAllProducts(products);
        setProductsLoaded(true);
      } catch (error) {
        console.error('Error fetching products for search:', error);
        setProductsLoaded(true); 
      }
    };

    fetchAllProducts();
  }, []);

  // Perform search
  const performSearch = useCallback((term) => {
    if (!term || !term.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    const filteredProducts = allProducts.filter(product => 
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(term.toLowerCase()))
    );

    setSearchResults(filteredProducts);
    setIsSearching(false);
  }, [allProducts, setSearchResults, setIsSearching, addToHistory]);
  // Handle search submission
  const handleSearch = useCallback((term) => {
    const searchQuery = term || searchTerm;
    if (!searchQuery || !searchQuery.trim()) return;

    setSearchTerm(searchQuery);
    performSearch(searchQuery);
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  }, [searchTerm, setSearchTerm, performSearch, navigate]);

  // Search by category
  const searchByCategory = useCallback((categoryId) => {
    const categoryProducts = allProducts.filter(product => 
      product.proCategoryId === categoryId
    );
    setSearchResults(categoryProducts);
    navigate(`/search?category=${categoryId}`);
  }, [allProducts, setSearchResults, navigate]);

  // Get search suggestions
  const getSearchSuggestions = useCallback((term) => {
    if (!term || !term.trim()) return [];

    return allProducts
      .filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase())
      )
      .slice(0, 5)
      .map(product => product.name);
  }, [allProducts]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    isSearching,
    handleSearch,
    performSearch,
    searchByCategory,
    getSearchSuggestions,
    allProducts,
    clearSearch,
  };
}