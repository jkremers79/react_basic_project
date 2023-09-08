import { create } from "zustand";
import { data } from "./utils/data";

export const useStore = create((set) => ({
    events: data,
    selectedRecipe: "",
    setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
    filter: "",
    setFilter: (filter) => set({ filter: filter }),
    search: "",
    setSearch: (string) => set({ search: string })
}))