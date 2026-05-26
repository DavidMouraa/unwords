import { v4 as uuidv4 } from "uuid"
import useFileManagerStore from "@/store/useFileManagerStore"
import FILE_MANAGER_ITEMS_TEMPLATES from "../_constants/templates/fileManagerItemsTemplates"

const buildItem = (type, parentId) => {
  const { items } = useFileManagerStore.getState()
  const template = FILE_MANAGER_ITEMS_TEMPLATES[type] || {}
  const label = template.label

  const sameLabelTotal = Object.values(items).filter((item) => item.type === type).length

  return {
    id: uuidv4(),
    type,
    parentId,
    data: {
      label: `${label} ${sameLabelTotal || ""}`,
      ...template.data,
    },
  }
}

export default buildItem