import INSPECTOR_FORMS_MAP from "@/app/_constants/maps/InspectorFormsMap";
import useGraphEditorStore from "@/store/useGraphEditorStore";
import useInspectorStore from "@/store/useInspectorStore";
import useVariableStore from "@/store/useVariablesStore";

export default function Inspector() {
  const { inspectedType, inspectedId } = useInspectorStore()
  const { variables } = useVariableStore()
  const { nodes } = useGraphEditorStore()

  if (!inspectedType || !inspectedId) return

  const inspectedItem = {
    node: (function() {
      return nodes.find((node) => node.id === inspectedId)
    })(),
    variable: variables[inspectedId],
  }[inspectedType]

  console.log(inspectedItem)

  const InspectorForm = INSPECTOR_FORMS_MAP[inspectedType][inspectedItem.type]

  return (
    <div className="p-2 text-white">
      <InspectorForm 
        key={inspectedId}
        item={inspectedItem}
      />
    </div>
  )
}