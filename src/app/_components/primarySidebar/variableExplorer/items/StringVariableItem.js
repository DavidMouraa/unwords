import ExplorerItem from "../../ExplorerItem";
import { RxLetterCaseCapitalize } from "react-icons/rx";


export default function StringVariableItem({ variable }) {
  return (
    <ExplorerItem 
      item={variable}
      Icon={RxLetterCaseCapitalize}
    />
  )
}