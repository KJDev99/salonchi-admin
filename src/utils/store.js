import { create } from "zustand";

export const useStore = create((set) => ({
  collapsed: false,
  setCollapsed: (payload) => set(() => ({ collapsed: payload })),
}));
