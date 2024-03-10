import { create } from "zustand";
import type { Welcome,Seta } from "../types.d.ts";
import { persist } from "zustand/middleware";
export type productsCard = Seta & {
  count: number;
};
export interface CarStore {
  products: productsCard[];
  addProduct: (product: productsCard) => void;
  deleteProduct: (id: number) => void;
  updateCountProduct: (id: number, count: number) => void;
  getProductsCout: () => number;
}
export const useCarStore = create<CarStore>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
      updateCountProduct: (id, count) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id ? { ...product, count } : product
          ),
        })),
      getProductsCout: () =>{
        const products = get().products;
        return products.reduce((acc, product) => acc + product.count, 0);
      }
    }),
    { name: "car-store" }
  )
);
