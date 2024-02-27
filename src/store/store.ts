import { create } from "zustand";

interface StoreState {
  showInfobar: boolean;
  setShowInfobar: (showInfobar: boolean) => void;
  toggleInfobar: () => void;
}

export const useStore = create<StoreState>((set) => ({
  showInfobar: false,
  setShowInfobar: (show) => set({ showInfobar: show }),

  toggleInfobar: () => set((state) => ({ showInfobar: !state.showInfobar })),
}));
