import Input from "../../inputs/Input"
import VariableSelect from "../../inputs/VariableSelect"
import useVariableManagerStore from "@/store/useVariableManagerStore"

export default function VariableInspector({ children, item }) {
  const { renameVariable } = useVariableManagerStore()

  return (
    <div className="text-secondary-500 text-sm">
      <div className="flex flex-col gap-2 p-2">
        <Input 
          itemId={item.id}
          label={"Nome"}
          defaultValue={item.data.label}
          action={renameVariable}
        />
        <VariableSelect 
          defaultType={item.type}
        />

        {children}
      </div>
    </div>
  )
}