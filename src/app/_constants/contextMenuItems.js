import buildNode from "../_utils/buildNode"
import buildItem from "../_utils/buildItem"
import useFileManagerStore from "@/store/useFileManagerStore"
import useGraphEditorStore from "@/store/useGraphEditorStore"
import usePrimarySidebarStore from "@/store/usePrimarySidebar"
import useVariableStore from "@/store/useVariablesStore"
import buildVariable from "../_utils/buildVariable"

const { 
  setItems,
  openFolder,
  deleteItem,
  deleteFolder,
} = useFileManagerStore.getState()
const { 
  setNodes, 
  setEdges,
  removeNodeFileId
} = useGraphEditorStore.getState()
const {
  setRenamingItemId,
} = usePrimarySidebarStore.getState()
const {
  addVariable,
  deleteVariable,
} = useVariableStore.getState()

const CONTEXT_MENU_ITEMS = {
  createNode: {
    label: "Nodes",
    type: "submenu",
    subItemsKeys: ["createTextNode", "createChoiceNode"]
  },
  createTextNode: {
    label: "Texto",
    type: "default",
    action: (_, { clientPos }) => {
      setNodes(buildNode("text", clientPos))
    }
  },
  createChoiceNode: {
    label: "Escolha",
    type: "default",
    action: (_, { clientPos }) => {
      setNodes(buildNode("choice", clientPos))
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
  renameItem: {
    label: "Renomear",
    type: "default",
    action: (event, { itemId }) => {
      event.stopPropagation()

      setRenamingItemId(itemId)
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
  },
  createVariable: {
    label: "Nova variável",
    type: "submenu",
    subItemsKeys: ["createVariableString", "createVariableNumber"],
  },
  createVariableString: {
    label: "String",
    type: "default",
    action: () => {
      const newVariable = buildVariable("string")

      console.log(newVariable)
      addVariable({[newVariable.id]: newVariable})
    }
  },
  createVariableNumber: {
    label: "Number",
    type: "default",
    action: () => {
      const newVariable = buildVariable("number")


      addVariable({[newVariable.id]: newVariable})
    }
  },
  deleteVariable: {
    label: "Deletar",
    type: "default",
    action: (event, { itemId }) => {
      deleteVariable(itemId)
    }
  }
}

export default CONTEXT_MENU_ITEMS