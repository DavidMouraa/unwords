import useInspectorStore from "@/store/useInspectorStore"
import INSPECTOR_MAP from "@/app/_constants/maps/inspectorsMap"

export default function InspectorManager() {
  const { inspectionItem } = useInspectorStore()

  if (!inspectionItem) return

  const Inspector = INSPECTOR_MAP[inspectionItem.type][inspectionItem.item.type]

  return (
    <Inspector 
      item={inspectionItem.item}
    />
  )
}