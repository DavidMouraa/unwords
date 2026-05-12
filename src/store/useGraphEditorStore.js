import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

const initialNodes = [
  {
    id: "start",
    type: "start",
    position: { x: 10, y: 0 },
    draggable: false,
    deletable: false,
    connectable: false,
    selectable: false,
  }
]
const initialEdges = []

const useGraphEditorStore = create(immer((set) => ({
  nodes: initialNodes,
  edges: initialEdges,
  startTargetId: null,
  clientPos: { x: 0, y: 0 },
  
  setNodes: (node) => set((state) => {
    state.nodes = typeof node === "function" ? node(state.nodes) : [...state.nodes, node]
  }),
  
  setEdges: (edge) => set((state) => {
    state.edges = typeof edge === "function" ? edge(state.edges) : [...state.edges, edge]
  }),

  setNodeFileId: (nodeId, fileId) => set((state) => {
    const nodeIndex = state.nodes.findIndex((node) => node.id === nodeId)

    state.nodes[nodeIndex].data.fileId = fileId
  }),

  setStartTargetId: (targetId) => set((state) => {
    state.startTargetId = typeof targetId === "function" ? targetId(state.startTargetId) : targetId
  }),

  setStartNodePosition: (targetPosition) => set((state) => {
    const offSetX = 50
    const offSetY = 12

    state.nodes = state.nodes.map((node) => {
      if (node.type === "start") {
        return {
          ...node,
          position: {
            x: targetPosition.x - offSetX,
            y: targetPosition.y - offSetY,
          }
        }
      }
      return node
    })
  }),

  setClientPos: (clientPos) => set((state) => {
    state.clientPos = typeof clientPos === "function" ? clientPos(state.clientPos) : clientPos
  }),
})))

export default useGraphEditorStore