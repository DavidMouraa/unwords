import { 
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialItems = {
  item_1: {
    id: "item_1",
    type: "graph",
    parentId: null,
    data: {
      label: "grapho",
      nodes: [],
      edges: [],
    }
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
    const activedFileId = state.activedFileId
    const activedFileNodes = state.items[activedFileId].data.nodes

    state.items[activedFileId].data.nodes = typeof node === "function" ? node(activedFileNodes) : [...activedFileNodes, node]
  }),

  setNodeFileId: (fileId, nodeId) => set((state) => {
    const activedFileId = state.activedFileId
    const nodeIdIndex = state.items[activedFileId].data.nodes.findIndex((node) => node.id === nodeId)

    state.items[activedFileId].data.nodes[nodeIdIndex].fileId = fileId
  }),

  setFileEdges: (edge) => set((state) => {
    const activedFileId = state.activedFileId
    const activedFileEdges = state.items[activedFileId].data.edges

    state.items[activedFileId].data.edges = typeof edge ? edge(activedFileEdges) : [...activedFileEdges, edge]
  }),

  openFile: (fileId) => set((state) => {
    const openFilesId = state.openFilesId

    if (!openFilesId.includes(fileId)) {
      state.openFilesId.push(fileId)
    }

    state.activedFileId = fileId
  }),

  closeFile: (fileId) => set((state) => {
    const openFilesId = state.openFilesId
    const fileIdIndex = openFilesId.indexOf(fileId)

    state.openFilesId = openFilesId.filter((openFileId) => openFileId !== fileId)

    if (state.activedFileId === fileId) {
      state.activedFileId = openFilesId[fileIdIndex + 1] || openFilesId[fileIdIndex - 1] || null
    }
  }),

  deleteFile: (fileId) => set((state) => {
    state.closeFile(fileId)

    delete state.items[fileId]
  }),

  updadeActivedItemContent: (newContent) => set((state) => {
    state.items[state.activedFileId].data.content = newContent
  }),

  onNodesChange: (changes) => set((state) => {
    const activedFileId = state.activedFileId
    const activedFileNodes = state.items[activedFileId].data.nodes

    state.items[activedFileId].data.nodes = applyNodeChanges(changes, activedFileNodes)
  }),

  onEdgesChange: (changes) => set((state) => {
    const activedFileId = state.activedFileId
    const activedFileEdges = state.items[activedFileId].data.edges

    state.items[activedFileId].data.edges = applyEdgeChanges(changes, activedFileEdges)
  }),

  onConnect: (params) => set((state) => {
    const activedFileId = state.activedFileId
    const activedFileEdges = state.items[activedFileId].data.edges

    state.items[activedFileId].data.edges = addEdge(params, activedFileEdges)
  })
})))

export default useFileManagerStore