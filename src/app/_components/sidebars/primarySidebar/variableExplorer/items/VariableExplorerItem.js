import useInspectorStore from "@/store/useInspectorStore";
import ExplorerItem from "../../ExplorerItem";

export default function VariableExplorerItem({ item, Icon }) {
  const { setInspectionItem } = useInspectorStore()
  
  const contextMenuOptionsKeys = ["deleteVariable"]

  function handleClick() {
    setInspectionItem("variable", item.id)
  }

  return (
    <ExplorerItem 
      item={item}
      Icon={Icon}
      contextMenuOptionsKeys={contextMenuOptionsKeys}
      onClick={handleClick}
    />
  )
}