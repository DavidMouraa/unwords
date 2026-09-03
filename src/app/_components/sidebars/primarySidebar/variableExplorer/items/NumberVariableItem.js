import ExplorerItem from "../../ExplorerItem";
import { FiHash } from "react-icons/fi";

export default function NumberVariableItem({ item }) {
  return (
    <ExplorerItem 
      item={item}
      Icon={FiHash}
    />
  )
}