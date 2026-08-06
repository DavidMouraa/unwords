import INSPECTORS_MAP from "@/app/_constants/maps/inspectorsMap"
import useInspectorStore from "@/store/useInspectorStore"
import { useEffect } from "react"

export default function InspectorManager() {
  const { inspectionItem } = useInspectorStore()

  if (!inspectionItem) return

  const Inspector = INSPECTORS_MAP[inspectionItem.type][inspectionItem.item.type]

  return (
    <div>
      <Inspector 
        item={inspectionItem.item}
      />
    </div>
  )
}