import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const usePlayerStore = create(immer((set) => ({
  content: null,

  setContent: (content) => set((state) => {
    state.content = typeof content === "function" ? content(state.content) : content
  })
})))

export default usePlayerStore