import { useEffect } from "react";
import Input from "../InspectorsFields/Input";
import Select from "../InspectorsFields/Select";
import VARIABLE_TYPES_MAP from "@/app/_constants/maps/VariableTypesMap";
import useVariableManagerStore from "@/store/useVariableManagerStore";
import useInspectorStore from "@/store/useInspectorStore";

export default function VariableInspector({ children, item }) {
  const { 
    variables,
    renameVariable,
    changeVariableType, 
  } = useVariableManagerStore()

  function nameInputAction(newName) {
    renameVariable(item.id, newName)
  }

  function typeSelectAction(newType) {
    changeVariableType(item.id, newType)

    // console.log(variables[item.id].type)
  }

  return (
    <div className="flex flex-col gap-2 p-1 text-sm">
      <Input 
        label={"Nome"}
        defaultValue={item.data.label}
        action={nameInputAction}
      />

      <Select 
        label={"Tipo"}
        defaultValue={item.type}
        action={typeSelectAction}
      >
        {Object.values(VARIABLE_TYPES_MAP).map((type, index) => (
          <option
            key={index}
            value={type.value}
          >
            {type.label}
          </option>
        ))}
      </Select>

      {children}
    </div>
  )
}