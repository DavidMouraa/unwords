import { 
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import { create } from "zustand";

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

const useFileManagerStore = create((set, get) => ({
  items: initialItems,
  openFilesId: [],
  activedFileId: null,
  draggingItemId: null,

  setItems: (items) => set((state) => ({
    items: typeof items === "function" ? items(state.items) : items,
  })),

  setOpenFiles: (files) => set((state) => ({
    openFilesId: typeof files === "function" ? files(state.openFilesId) : files,
  })),

  setDraggingItemId: (itemId) => set({ draggingItemId: itemId }),

  setFileNodes: (node) => {
    const activedFileNodes = get().items[get().activedFileId].data.nodes

    get().setItems((items) => ({
      ...items,
      [get().activedFileId]: {
        ...items[get().activedFileId],
        data: {
          ...items[get().activedFileId].data,
          nodes: typeof node === "function" ? node(activedFileNodes) : [...activedFileNodes, node] 
        }
      }
    }))
  },

  setNodeFileId: (fileId, nodeId) => {
    const activedFileId = get().activedFileId

    get().setItems((items) => ({
      ...items,
      [activedFileId]: {
        ...items[activedFileId],
        data: {
          ...items[activedFileId].data,
          nodes: items[activedFileId].data.nodes.map((node) => node.id === nodeId
            ? {
              ...node,
              data: { ...node.data, fileId }
            } 
            : node
          )
        }
      }
    }))
  },

  setFileEdges: (edge) => {
    const activedFileEdges = get().items[get().activedFileId].data.nodes

    get().setItems((items) => ({
      ...items,
      [get().activedFileId]: {
        ...items[get().activedFileId],
        data: {
          ...items[get().activedFileId].data,
          edges: typeof edge === "function" ? edge(activedFileEdges) : [...activedFileEdges, edge]
        }
      }
    }))
  },

  openFile: (fileId) => set((state) => ({
    openFilesId: !state.openFilesId.includes(fileId) ? [...state.openFilesId, fileId] : state.openFilesId,
    activedFileId: fileId,
  })),

  closeFile: (fileId) => set((state) => ({
    openFilesId: state.openFilesId.filter((openFile) => openFile !== fileId),
    activedFileId: state.activedFileId === fileId ? (state.openFilesId[state.openFilesId.indexOf(fileId) - 1] || state.openFilesId[state.openFilesId.indexOf(fileId) + 1]) || null : state.activedFileId,
  })),

  deleteFile: (fileId) => {
    const { [fileId]: _item, ...newItems } = get().items

    get().closeFile(fileId)
    get().setItems(newItems)
  },

  updateActiveItemContent: (newContent) => {
    get().setItems((items) => ({
      ...items,
      [get().activedFileId]: {
        ...items[get().activedFileId],
        data: {
          ...items[get().activedFileId].data,
          content: newContent
        }
      }
    }))
  },

  onNodesChange: (change) => {
    const activedFileNodes = get().items[get().activedFileId].data.nodes

    get().setItems((items) => ({
      ...items,
      [get().activedFileId]: {
        ...items[get().activedFileId],
        data: {
          ...items[get().activedFileId].data,
          nodes: applyNodeChanges(change, activedFileNodes)
        }
      }
    }))
  },

  onEdgesChange: (change) => {
    const activedFileEdges = get().items[get().activedFileId].data.edges

    get().setItems((items) => ({
      ...items,
      [get().activedFileId]: {
        ...items[get().activedFileId],
        data: {
          ...items[get().activedFileId].data,
          edges: applyEdgeChanges(change, activedFileEdges)
        }
      }
    }))
  },

  onConnect: (params) => {
    const activedFileEdges = get().items[get().activedFileId].data.edges

    get().setItems((items) => ({
      ...items,
      [get().activedFileId]: {
        ...items[get().activedFileId],
        data: {
          ...items[get().activedFileId].data,
          edges: addEdge(params, activedFileEdges)
        }
      }
    }))
  }
}))

export default useFileManagerStore