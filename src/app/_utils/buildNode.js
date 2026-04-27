import { v4 as uuidv4 } from "uuid"

export default function buildNode(type, position) {
  return {
    id: uuidv4(),
    type,
    position,
  }
}