import ExplorerItem from "../../ExplorerItem";
import { MdShortText } from "react-icons/md";

export default function StringVariableItem({ item }) {
  return (
    <ExplorerItem 
      item={item}
      Icon={MdShortText}
    />
  )
}