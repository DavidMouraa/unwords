import { create } from "zustand";

const useGraphEditorStore = create((set) => ({
  clientPos: { x: 0, y: 0 },
  
  setClientPos: (clientPos) => set((state) => ({
    clientPos: typeof clientPos === "function" ? clientPos(state.clientPos) : clientPos
  }))
}))

export default useGraphEditorStore