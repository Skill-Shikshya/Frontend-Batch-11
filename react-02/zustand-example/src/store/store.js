import axios from "axios";
import { create } from "zustand";

const useCountStore = create((set) => ({
  count: 1, //inital value
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      set({ products: response.data });
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  },
}));

export { useCountStore, useProductStore };
