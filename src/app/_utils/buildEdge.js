import { v4 as uuidv4 } from "uuid"

const buildEdge = (type, source, target) => {
  return {
    id: uuidv4(),
    type,
    source,
    target
  }
}

export default buildEdge