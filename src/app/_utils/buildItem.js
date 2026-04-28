import { v4 as uuidv4 } from "uuid"
import useFileManagerStore from "@/store/useFileManagerStore"

const buildItem = (type, parentId) => {
  const { items } = useFileManagerStore.getState()
  const label = "texto"

  const sameLabelTotal = Object.values(items).filter((item) => item.type === type).length

  return {
    id: uuidv4(),
    type,
    parentId,
    data: {
      label: `${label} ${sameLabelTotal || ""}`,
      content: "Olá, Mundo!",
    },
  }
}

export default buildItem