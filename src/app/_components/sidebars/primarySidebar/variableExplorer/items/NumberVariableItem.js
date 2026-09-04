import { FiHash } from "react-icons/fi";
import VariableExplorerItem from "./VariableExplorerItem";

export default function NumberVariableItem({ item }) {
  return (
    <VariableExplorerItem 
      item={item}
      Icon={FiHash}
    />
  )
}