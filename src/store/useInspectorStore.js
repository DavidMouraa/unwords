import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useInspectorStore = create(immer((set) => ({
  inspectedId: null,
  inspectedType: null,
  renamingItem: null,

  setInspectionItem: (type, itemId) => set((state) => {
    state.inspectedId = itemId
    state.inspectedType = type
  }),
})))

export default useInspectorStore