import { create } from "zustand";

const useFileManagerStore = create((set, get) => ({
  items: {},
  openFiles: [],
  activedFileId: null,

  setItems: (items) => set((state) => ({
    items: typeof items === "function" ? items(state.items) : items
  })),
  
  setOpenFiles: (files) => set((state) => ({
    openFiles: typeof files === "function" ? files(state.openFiles) : files
  })),

  openFile: (file) => set((state) => ({
    openFiles: !state.openFiles.includes(file) ? [...state.openFiles, file] : state.openFiles,
    activedFileId: file,
  })),

  closeFile: (file) => set((state) => ({
    openFiles: state.openFiles.filter((openFile) => openFile !== file),
    activedFileId: state.activedFileId === file ? state.openFiles[state.openFiles.indexOf(file) - 1] || null : state.activedFileId,
  })),
}))

export default useFileManagerStore