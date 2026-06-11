import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const usePlayerStore = create(immer((set) => ({
  playerContent: [],

  setPlayerContent: (content) => set((state) => {
    state.playerContent = typeof content === "function" ? content(state.playerContent) : content
  })
})))

export default usePlayerStore