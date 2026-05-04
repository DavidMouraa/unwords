import { create } from "zustand"
import { immer } from "zustand/middleware/immer"



const useGraphEditorStore = create(immer((set) => ({
  nodes: [],
  edges: [],
  clientPos: { x: 0, y: 0 },
  
  setNodes: (node) => set((state) => {
    state.nodes = typeof node === "function" ? node(state.nodes) : [...state.nodes, node]
  }),
  
  setEdges: (edge) => set((state) => {
    state.edges = typeof edge === "function" ? edge(state.edges) : [...state.edges, edge]
  }),

  setNodeFileId: (nodeId, fileId) => set((state) =>{
    const nodeIndex = state.nodes.findIndex((node) => node.id === nodeId)

    state.nodes[nodeIndex].data.fileId = fileId
  }),

  setClientPos: (clientPos) => set((state) => {
    state.clientPos = typeof clientPos === "function" ? clientPos(state.clientPos) : clientPos
  }),
})))

export default useGraphEditorStore