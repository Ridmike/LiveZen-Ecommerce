import axios from "axios";
import { useEffect, useState } from "react";


export default function useCategory() {
    const [category, setCategory] = useState([]);

    const fetchCategory = async () => {
        try {
            const response = await axios.get("http://localhost:3000/categories");
            const apiResponse = response.data;
            const categoryData = apiResponse.data || apiResponse;
            setCategory(categoryData);
        } catch (error) {
            console.error('📋 Error Details:', {
                message: error.message,
                status: error.response?.status,
                statusText: error.response?.statusText,
                data: error.response?.data
            });
            setError(error.response?.data?.message || error.message || 'Failed to fetch product');
            setProducts([]);
        }
    }
    useEffect(() => {
        fetchCategory();
    }, []);

    return category;
}
