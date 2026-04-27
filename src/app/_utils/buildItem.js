import { v4 as uuidv4 } from "uuid"

const buildItem = (type, parentId) => {
  return {
    id: uuidv4(),
    type,
    parentId,
    data: {
      label: "texto",
    },
  }
}

export default buildItem