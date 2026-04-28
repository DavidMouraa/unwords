import useNodesStore from "@/store/useNodesStore"
import buildNode from "../_utils/buildNode"
import buildItem from "../_utils/buildItem"
import useFileManagerStore from "@/store/useFileManagerStore"

const { setNodes } = useNodesStore.getState()
const { setItems, deleteFile } = useFileManagerStore.getState()

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
    }
  },
  createTextFile: {
    label: "Texto",
    type: "default",
    action: () => {
      const newFile = buildItem("text", null)

      setItems((items) => ({...items, [newFile.id]: newFile}))
    }
  },
  deleteItem: {
    label: "Deletar",
    type: "default",
    action: (_, { itemId }) => {
      deleteFile(itemId)
    }
  }
}

export default CONTEXT_MENU_ITEMS