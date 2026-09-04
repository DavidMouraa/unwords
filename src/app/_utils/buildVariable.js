import { v4 as uuidv4 } from "uuid"
import VARIABLE_TEMPLATES from "../_constants/templates/variableTemplates"

export default function buildVariable(type) {
  const variableTemplate = VARIABLE_TEMPLATES[type]

  return {
    id: uuidv4(),
    ...variableTemplate,
  }
}