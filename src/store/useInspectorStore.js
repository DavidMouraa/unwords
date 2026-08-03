import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useInspectorStore = create(immer((set) => ({
  inspectionItem: null,

  setInspectionItem: (type, item) => set((state) => {
    state.inspectionItem = {type, item}
  }),
})))

export default useInspectorStore