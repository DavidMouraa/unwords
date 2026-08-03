import Select from "./Select";
import VARIABLE_TYPES_MAP from "@/app/_constants/maps/VariableTypesMap";

export default function VariableSelect({ defaultType }) {
  return (
    <Select
      label={"Tipo"}
      defaultValue={defaultType}
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
  )
}