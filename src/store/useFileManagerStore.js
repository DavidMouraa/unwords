import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialItems = {
  main: {
    id: "main",
    type: "graph",
    parentId: null,
    data: {
      label: "Grapho",
      nodes: [],
      edges: [],
    }
  }
}

const openFolder = (state, folderId) => {
  let currentFolderId = folderId

  console.log(folderId)

  while (currentFolderId) {
    const folder = state.items[currentFolderId]

    if (!state.openFoldersId.includes(currentFolderId)) {
      state.openFoldersId.push(folder.id)
    }

    currentFolderId = folder.parentId
  }
}

const closeFile = (state, fileId) => {
  const fileIdIndex = state.openFilesId.indexOf(fileId)
  state.openFilesId = state.openFilesId.filter((openFileId) => openFileId !== fileId)

  if (state.activeFileId === fileId) {
    state.activeFileId = state.openFilesId[fileIdIndex + 1] || state.openFilesId[fileIdIndex - 1] || null
  }
}

const deleteItem = (state, fileId) => {
  closeFile(state, fileId)

  delete state.items[fileId]
}

const deleteFolder = (state, folderId) => {
  Object.values(state.items).forEach((item) => {
    if (item.parentId === folderId) {
      item.type === "folder" ? deleteFolder(state, item.id) : deleteItem(state, item.id)
    }
  })

  deleteItem(state, folderId)
}

const sortItems = (items) => {
  let folders = {}
  let files = {}

  for (const key in items) {
    const item = items[key]

    if (item.type === "folder") folders = {...folders, [key]: item}
    else files = {...files, [key]: item}
  }


  return {...folders, ...files}
}

const useFileManagerStore = create(immer((set) => ({
  items: initialItems,
  openFilesId: ["main"], 
  openFoldersId: [],
  activeFileId: null,
  draggingItemId: null,
  renamingItemId: null,

  setItems: (items) => set((state) => {
    state.items = sortItems(typeof items === "function" ? items(state.items) : items)
  }),

  setItemParentId: (itemId, parentId) => set((state) => {
    state.items[itemId].parentId = parentId
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
    const folderId = state.items[fileId].parentId

    if (!state.openFilesId.includes(fileId)) {
      state.openFilesId.push(fileId)
    }

    openFolder(state, folderId)
    state.activeFileId = fileId
  }),

  openFolder: (folderId) => set((state) => openFolder(state, folderId)),

  closeFile: (fileId) => set((state) => closeFile(state, fileId)),

  closeFolder: (folderId) => set((state) => {
    state.openFoldersId = state.openFoldersId.filter((folder) => folder !== folderId)
  }),

  deleteItem: (fileId) => set((state) => deleteItem(state, fileId)),

  deleteFolder: (folderId) => set((state) => deleteFolder(state, folderId)),

  updateActiveItemContent: (newContent) => set((state) => {
    state.items[state.activeFileId].data.content = newContent
  }),
})))

export default useFileManagerStore