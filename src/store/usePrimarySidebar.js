import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const usePrimarySidebarStore = create(immer((set) => ({
  renamingItemId: null,
  
  setRenamingItemId: (itemId) => set((state) => {
    state.renamingItemId = itemId
  }),
})))

export default usePrimarySidebarStore