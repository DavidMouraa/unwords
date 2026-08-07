import variableIcons from "@/app/_constants/maps/variableIcons"
import { default as DefaultItem } from "../../item"
import useInspectorStore from "@/store/useInspectorStore"
import useVariableManagerStore from "@/store/useVariableManagerStore"

export default function Item({ item, layer }) {
  const { setInspectionItem } = useInspectorStore()
  const { renameVariable } = useVariableManagerStore()
  
  const Icon = variableIcons[item.type]

  function handleClick() {
    setInspectionItem("variable", item.id)
  }

  const contextMenuOptionsKeys = ["renameItem"]

  return (
    <DefaultItem 
      className="flex items-center gap-1"
      item={item}
      Icon={Icon}
      layer={layer}
      draggable={false}
      onClick={handleClick}
      contextMenuOptionsKeys={contextMenuOptionsKeys}
      renameItem={renameVariable}
    />
  )
}