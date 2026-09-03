import { v4 as uuidv4 } from "uuid"

export default function buildVariable(type) {
  const variableTemplate = VARIABLE_TEMPLATES[type]

  return {
    id: uuidv4(),
    ...variableTemplate,
  }
}