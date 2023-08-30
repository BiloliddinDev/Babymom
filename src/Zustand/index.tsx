import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface langtype {
  products: {};
  setProducts: (value: {}) => void;
}

export const useProducts = create<langtype>()(
  persist(
    (set) => ({
      products: {},
      setProducts: (products: {}) => set(() => ({ products: products })),
    }),
    {
      name: "Products",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
