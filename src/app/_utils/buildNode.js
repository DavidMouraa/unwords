import { v4 as uuidv4 } from "uuid"
import NODE_TEMPLATES from "../_constants/nodeTemplates"

export default function buildNode(type, position={ x: 0, y: 0 }) {
  const template = NODE_TEMPLATES[type]

  return {
    id: uuidv4(),
    type,
    position,
    ...template,
  }
}