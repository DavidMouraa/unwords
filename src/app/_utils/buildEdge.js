import { v4 as uuidv4 } from "uuid"
import EDGE_TEMPLATES from "../_constants/templates/edgeTemplates"

const buildEdge = (type, source, target) => {
  const template = EDGE_TEMPLATES[type]

  return {
    id: uuidv4(),
    type,
    source,
    target,
    ...template.main,
  }
}

export default buildEdge