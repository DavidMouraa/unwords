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
}))

export default useFileManagerStore