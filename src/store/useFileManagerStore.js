import { 
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  reconnectEdge,
} from "@xyflow/react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialNodes = [
  {
    id: "node-1",
    type: "start",
    position: { x: 0, y: 0 }
  },
  {
    id: "node-2",
    type: "text",
    position: { x: 50, y: 0 },
    data: {
      fileId: null,
    },
  }
]

const initialEdges = [
  {
    id: "edge-1",
    type: "execute",
    source: "node-1",
    target: "node-2",
  }
]

const initialItems = {
  item_1: {
    id: "item_1",
    type: "graph",
    parentId: null,
    data: {
      label: "grapho",
      nodes: initialNodes,
      edges: initialEdges,
    }
  }
}

const setFileEdges = (state, edge) => {
  const activedFileEdges = state.items[state.activedFileId].data.edges

  state.items[state.activedFileId].data.edges = typeof edge ? edge(activedFileEdges) : [...activedFileEdges, edge]
}

const closeFile = (state, fileId) => {
  const fileIdIndex = state.openFilesId.indexOf(fileId)
  state.openFilesId = state.openFilesId.filter((openFileId) => openFileId !== fileId)

  if (state.activedFileId === fileId) {
    state.activedFileId = state.openFilesId[fileIdIndex + 1] || state.openFilesId[fileIdIndex - 1] || null
  }
}

const useFileManagerStore = create(immer((set) => ({
  items: initialItems,
  openFilesId: [],
  activedFileId: null,
  draggingItemId: null,

  setItems: (items) => set((state) => {
    state.items = typeof items === "function" ? items(state.items) : items
  }),

  setOpenFiles: (files) => set((state) => {
    state.openFilesId = typeof files === "function" ? files(state.openFilesId) : files
  }),

  setDraggingItemId: (itemId) => set((state) => {
    state.draggingItemId = itemId
  }),

  setFileNodes: (node) => set((state) => {
    const activedFileNodes = state.items[state.activedFileId].data.nodes

    state.items[state.activedFileId].data.nodes = typeof node === "function" ? node(activedFileNodes) : [...activedFileNodes, node]
  }),

  setNodeFileId: (fileId, nodeId) => set((state) => {
    const nodeIdIndex = state.items[state.activedFileId].data.nodes.findIndex((node) => node.id === nodeId)

    state.items[state.activedFileId].data.nodes[nodeIdIndex].data.fileId = fileId
  }),

  setFileEdges: (edge) => set((state) => setFileEdges(state, edge)),

  openFile: (fileId) => set((state) => {
    const openFilesId = state.openFilesId

    if (!openFilesId.includes(fileId)) {
      state.openFilesId.push(fileId)
    }

    state.activedFileId = fileId
  }),

  closeFile: (fileId) => set((state) => closeFile(state, fileId)),

  deleteFile: (fileId) => set((state) => {
    Object.values(state.items).forEach((item) => {
      if (item.type === "graph") {
        item.data.nodes.forEach((node) => {      
          if (node.data.fileId === fileId) {
            node.data.fileId = null
          }
        })
      }
    })

    closeFile(state, fileId)

    delete state.items[fileId]
  }),

  updateActivedItemContent: (newContent) => set((state) => {
    state.items[state.activedFileId].data.content = newContent
  }),

  onNodesChange: (changes) => set((state) => {
    const activedFileNodes = state.items[state.activedFileId].data.nodes

    state.items[state.activedFileId].data.nodes = applyNodeChanges(changes, activedFileNodes)
  }),

  onEdgesChange: (changes) => set((state) => {
    const activedFileEdges = state.items[state.activedFileId].data.edges

    state.items[state.activedFileId].data.edges = applyEdgeChanges(changes, activedFileEdges)
  }),

  onConnect: (params) => set((state) => {
    const activedFileEdges = state.items[state.activedFileId].data.edges
    const newParams = {...params, type: "execute"}

    state.items[state.activedFileId].data.edges = addEdge(newParams, activedFileEdges)
  }),

  onReconnect: (oldEdge, newConnection) => set((state) => {
    setFileEdges(state, (nodes) => reconnectEdge(oldEdge, newConnection, nodes))
  })
})))

export default useFileManagerStore