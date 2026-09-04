import ExplorerItem from "../../ExplorerItem";

export default function VariableExplorerItem({ item, Icon }) {
  const contextMenuOptionsKeys = ["deleteVariable"]

  return (
    <ExplorerItem 
      item={item}
      Icon={Icon}
      contextMenuOptionsKeys={contextMenuOptionsKeys}
    />
  )
}