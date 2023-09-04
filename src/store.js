import { create } from "zustand";
import { data } from "./utils/data";

export const useStore = create((set) => ({
    Events: data,
}))