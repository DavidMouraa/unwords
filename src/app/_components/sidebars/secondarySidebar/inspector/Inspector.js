import StringForm from "./forms/StringForm";
import NumberForm from "./forms/NumberForm";
import INSPECTOR_FORMS_MAP from "@/app/_constants/maps/InspectorFormsMap";
import useInspectorStore from "@/store/useInspectorStore";
import useVariableStore from "@/store/useVariablesStore";

export default function Inspector() {
  const { inspectedType, inspectedId } = useInspectorStore()
  const { variables } = useVariableStore()

  if (!inspectedType || !inspectedId) return

  const inspectedItem = variables[inspectedId]

  const InspectorForm = INSPECTOR_FORMS_MAP[inspectedType][inspectedItem.type]

  return (
    <div className="p-2 text-white">
      <InspectorForm 
        item={inspectedItem}
      />
    </div>
  )
}