import buildNode from "../_utils/buildNode"
import buildItem from "../_utils/buildItem"
import useFileManagerStore from "@/store/useFileManagerStore"
import useGraphEditorStore from "@/store/useGraphEditorStore"

const { 
  setItems,
  setRenamingItemId, 
  deleteFile,
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
    action: (_, { itemId }) => {
      const newFolder = buildItem("folder", itemId || null)

      setItems((items) => ({...items, [newFolder.id]: newFolder}))
    }
  },
  createTextFile: {
    label: "Texto",
    type: "default",
    action: (_, { itemId }) => {
      const newFile = buildItem("text", itemId || null)

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
  deleteItem: {
    label: "Deletar",
    type: "default",
    action: (_, { itemId }) => {
      deleteFile(itemId)
      removeNodeFileId(itemId)
    }
  }
}

export default CONTEXT_MENU_ITEMS