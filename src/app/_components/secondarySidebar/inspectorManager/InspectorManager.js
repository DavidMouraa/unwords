import INSPECTORS_MAP from "@/app/_constants/maps/inspectorsMap"
import useGraphEditorStore from "@/store/useGraphEditorStore"
import useInspectorStore from "@/store/useInspectorStore"
import useVariableManagerStore from "@/store/useVariableManagerStore"

export default function InspectorManager() {
  const { inspectedId, inspectedType } = useInspectorStore()
  const { variables } = useVariableManagerStore()
  const { nodes } = useGraphEditorStore()

  let nodesObject = {}

  nodes.forEach((node) => {
    nodesObject = {...nodesObject, [node.id]: node}
  })

  if (!inspectedId) return null

  const item = {
    variable: variables,
    node: nodesObject,
  }[inspectedType][inspectedId]

  if (!item) return null

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