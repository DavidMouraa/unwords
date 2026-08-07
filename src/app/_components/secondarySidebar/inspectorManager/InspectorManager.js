import INSPECTORS_MAP from "@/app/_constants/maps/inspectorsMap"
import useInspectorStore from "@/store/useInspectorStore"
import useVariableManagerStore from "@/store/useVariableManagerStore"

export default function InspectorManager() {
  const { inspectedId, inspectedType } = useInspectorStore()
  const { variables } = useVariableManagerStore()

  const item = variables[inspectedId]

  if (!inspectedId || !item ) return null

  const Inspector = INSPECTORS_MAP[inspectedType][item.type]


  return (
    <div>
      <Inspector 
        key={item.id}
        item={item}
      />
    </div>
  )
}