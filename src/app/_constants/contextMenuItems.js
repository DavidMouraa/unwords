import buildNode from "../_utils/buildNode"
import buildItem from "../_utils/buildItem"
import useFileManagerStore from "@/store/useFileManagerStore"
import useGraphEditorStore from "@/store/useGraphEditorStore"

const { 
  setItems,
  setRenamingItemId, 
  openFolder,
  deleteItem,
  deleteFolder,
} = useFileManagerStore.getState()
const { 
  setNodes, 
  setEdges,
  removeNodeFileId
} = useGraphEditorStore.getState()

const CONTEXT_MENU_ITEMS = {
  createTextNode: {
    label: "Texto",
    type: "default",
    action: (_, { clientPos }) => {
      setNodes(buildNode("text", clientPos))
    }
  },
  deleteNode: {
    label: "Deletar",
    type: "default",
    action: (event, { nodeId }) => {
      event.stopPropagation()

      setNodes((nodes) => nodes.filter((node) => nodeId !== node.id))
      setEdges((edges) => edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId))
    }
  },
  createFolder: {
    label: "Nova Pasta",
    type: "default",
    action: (event, { itemId }) => {
      event.stopPropagation()
      const newFolder = buildItem("folder", itemId || null)

      openFolder(itemId)
      setItems((items) => ({...items, [newFolder.id]: newFolder}))
    }
  },
  createFile: {
    label: "Novo Arquivo",
    type: "submenu",
    subItemsKeys: ["createTextFile"],
  },
  createTextFile: {
    label: "Texto",
    type: "default",
    action: (event, { itemId }) => {
      event.stopPropagation()

      const newFile = buildItem("text", itemId || null)

      openFolder(itemId)
      setItems((items) => ({...items, [newFile.id]: newFile}))
    }
  },
  renameItem: {
    label: "Renomear",
    type: "default",
    action: (event, { itemId }) => {
      event.stopPropagation()
      setRenamingItemId(itemId)
    }
  },
  deleteFile: {
    label: "Deletar",
    type: "default",
    action: (event, { itemId }) => {
      event.stopPropagation()
      deleteItem(itemId)
      removeNodeFileId(itemId)
    }
  },
  deleteFolder: {
    label: "Deletar",
    type: "default",
    action: (event, { itemId }) => {
      event.stopPropagation()
      deleteFolder(itemId)
    }
  }
}

export default CONTEXT_MENU_ITEMS