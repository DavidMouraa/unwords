import VARIABLE_TEMPLATES from "../_constants/templates/variablesTemplates"
import { v4 as uuidv4 } from "uuid"

export default function buildVariable(type) {
  const template = VARIABLE_TEMPLATES[type]

  return {
    id: uuidv4(),
    type,
    label: "String",
    data: {
      ...template.data,
    }
  }
}