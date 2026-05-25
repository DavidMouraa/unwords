import { v4 as uuidv4 } from "uuid"
import NODE_TEMPLATES from "../_constants/templates/nodeTemplates"

export default function buildNode(type, position={ x: 0, y: 0 }) {
  const template = NODE_TEMPLATES[type]

  const inputs = template.inputs.map((input) => {
    return {
      ...input,
      id: uuidv4()
    }
  })

  const outputs = template.outputs.map((output) => {
    return {
      ...output,
      id: uuidv4()
    }
  })

  return {
    id: uuidv4(),
    type,
    position,
    ...template.main,
    data: {
      ...template.data,
      inputs,
      outputs,
    },
  }
}