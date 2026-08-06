import variableIcons from "@/app/_constants/maps/variableIcons"
import { default as DefaultItem } from "../../item"
import useInspectorStore from "@/store/useInspectorStore"
import { useEffect } from "react"
import useVariableManagerStore from "@/store/useVariableManagerStore"

export default function Item({ item, layer }) {
  const { inspectionItem, setInspectionItem } = useInspectorStore()
  const { variables } = useVariableManagerStore()
  
  const Icon = variableIcons[item.type]

  function handleClick() {
    setInspectionItem("variable", item)
  }

  useEffect(() => {
    if (inspectionItem?.item.id === item.id) {
      setInspectionItem("variable", item)
    }
  }, [variables[item.id]])

  return (
    <DefaultItem 
      className="flex items-center gap-1"
      item={item}
      Icon={Icon}
      layer={layer}
      draggable={false}
      onClick={handleClick}
    />
  )
}