import { create } from "zustand";

const initialItems = {
  item_1: {
    id: "item_1",
    type: "graph",
    parentId: null,
    data: {
      label: "grapho"
    }
  }
}

const useFileManagerStore = create((set, get) => ({
  items: initialItems,
  openFilesId: [],
  activedFileId: null,

  setItems: (items) => set((state) => ({
    items: typeof items === "function" ? items(state.items) : items
  })),
  
  setOpenFiles: (files) => set((state) => ({
    openFilesId: typeof files === "function" ? files(state.openFilesId) : files
  })),

  openFile: (file) => set((state) => ({
    openFilesId: !state.openFilesId.includes(file) ? [...state.openFilesId, file] : state.openFilesId,
    activedFileId: file,
  })),

  closeFile: (file) => set((state) => ({
    openFilesId: state.openFilesId.filter((openFile) => openFile !== file),
    activedFileId: state.activedFileId === file ? (state.openFilesId[state.openFilesId.indexOf(file) - 1] || state.openFilesId[state.openFilesId.indexOf(file) + 1]) || null : state.activedFileId,
  })),
}))

export default useFileManagerStore