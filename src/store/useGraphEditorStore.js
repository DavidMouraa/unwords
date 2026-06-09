import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { v4 as uuidv4 } from "uuid"

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

  addNodeChoice: (nodeId, label) => set((state) => {
    const nodeIndex = state.nodes.findIndex((node) => node.id === nodeId)

    state.nodes[nodeIndex].data.choices = [...state.nodes[nodeIndex].data.choices, {
      id: uuidv4(),
      label,
    }]
  }),

  renameNodeChoice: (nodeId, choiceId, newName) => set((state) => {
    const nodeIndex = state.nodes.findIndex((node) => node.id === nodeId)
    const choiceIndex = state.nodes[nodeIndex].data.choices.findIndex((choice) => choice.id === choiceId)

    state.nodes[nodeIndex].data.choices[choiceIndex].label = newName
  }),

  removeNodeFileId: (fileId) => set((state) => {
    state.nodes = state.nodes.map((node) => {
      if (node.type !== "start" && node.data.fileId === fileId) {
        return {
          ...node,
          data: {
            ...node.data,
            fileId: null
          }
        }
      }

      return node
    })
  })
})))

export default useGraphEditorStore