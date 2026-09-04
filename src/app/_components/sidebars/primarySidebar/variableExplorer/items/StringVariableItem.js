import { MdShortText } from "react-icons/md";
import VariableExplorerItem from "./VariableExplorerItem";

export default function StringVariableItem({ item }) {
  return (
    <VariableExplorerItem 
      item={item}
      Icon={MdShortText}
    />
  )
}