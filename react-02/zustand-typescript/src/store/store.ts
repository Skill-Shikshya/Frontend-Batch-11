import axios from "axios";
import { create } from "zustand";

type CountStore = {
  count: number;
  inc: () => void;
  dec: () => void;
};

type Ratings = {
  rate: number;
  count: number;
};

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Ratings;
  title: string;
};

type ProductStore = {
  products: Product[];
  fetchProducts: () => Promise<void>;
};

const useCountStore = create<CountStore>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));
const useProductStore = create<ProductStore>((set) => ({
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
