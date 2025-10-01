import { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await axios.get("http://localhost:3000/products");
            
            // Your API returns { success: true, message: "", data: [...] }
            // So we need to access response.data.data
            const apiResponse = response.data;
            const productsData = apiResponse.data || apiResponse; 
            
            const productsArray = Array.isArray(productsData) ? productsData : [];
            
            setProducts(productsArray);
        } catch (err) {
            console.error('📋 Error Details:', {
                message: err.message,
                status: err.response?.status,
                statusText: err.response?.statusText,
                data: err.response?.data
            });
            setError(err.response?.data?.message || err.message || 'Failed to fetch products');
            setProducts([]); // Reset to empty array on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { 
        products, 
        loading, 
        error, 
        refetch: fetchProducts 
    };
}

