import { BASE_URL } from "@/api/api.config";
import axios from "axios";

export const ProductService = {
  
  async fetchProducts(type: string) {    
    try {
      const response = await axios.get(
        `${BASE_URL}/products/find/${type}`
      );
      return response.data;
    } catch (error) {
      
      // throw error;
    }
  }
}