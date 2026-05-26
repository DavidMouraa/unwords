import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialItems = {
  main: {
    id: "main",
    type: "graph",
    parentId: null,
    data: {
      label: "grapho",
      nodes: [],
      edges: [],
    }
  }
}

const closeFile = (state, fileId) => {
  const fileIdIndex = state.openFilesId.indexOf(fileId)
  state.openFilesId = state.openFilesId.filter((openFileId) => openFileId !== fileId)

  if (state.activeFileId === fileId) {
    state.activeFileId = state.openFilesId[fileIdIndex + 1] || state.openFilesId[fileIdIndex - 1] || null
  }
}

const useFileManagerStore = create(immer((set) => ({
  items: initialItems,
  openFilesId: ["main"], 
  openFoldersId: [],
  activeFileId: null,
  draggingItemId: null,
  renamingItemId: null,

  setItems: (items) => set((state) => {
    state.items = typeof items === "function" ? items(state.items) : items
  }),

  setOpenFiles: (files) => set((state) => {
    state.openFilesId = typeof files === "function" ? files(state.openFilesId) : files
  }),

  setDraggingItemId: (itemId) => set((state) => {
    state.draggingItemId = typeof itemId === "function" ? itemId(state.draggingItemId) : itemId
  }),

  setRenamingItemId: (itemId) => set((state) => {
    state.renamingItemId = typeof itemId === "function" ? itemId(state.renamingItemId) : itemId
  }),

  setFileName: (newName) => set((state) => {
    if (newName) state.items[state.renamingItemId].data.label = newName
  }),

  openFile: (fileId) => set((state) => {
    const openFilesId = state.openFilesId

    if (!openFilesId.includes(fileId)) {
      state.openFilesId.push(fileId)
    }

    state.activeFileId = fileId
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

  updateActiveItemContent: (newContent) => set((state) => {
    state.items[state.activeFileId].data.content = newContent
  })
})))

export default useFileManagerStore