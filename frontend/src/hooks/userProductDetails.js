import { useState, useEffect } from "react";
import axios from "axios";

export default function useProductDetails(id) {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch single product
        const prodRes = await axios.get(`http://localhost:3000/products/${id}`);
        const productData = prodRes.data.data || prodRes.data;
        setProduct(productData);

        // Fetch all products to find related ones
        const allProductsRes = await axios.get(`http://localhost:3000/products`);
        const allProducts = allProductsRes.data.data || allProductsRes.data || [];
        
        // First try: Filter by same category
        let related = allProducts
          .filter(p => {
            return p._id !== id && p.proCategoryId === productData.proCategoryId;
          })
          .slice(0, 4);
          
        // If no related products found by category, show random products (excluding current)
        if (related.length === 0) {
          related = allProducts
            .filter(p => p._id !== id)
            .slice(0, 4);
        }
        setRelatedProducts(related);
        
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError(err.response?.data?.message || err.message || "Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { product, relatedProducts, loading, error };
}
