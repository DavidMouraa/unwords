import useVariableStore from "@/store/useVariablesStore";
import SelectField from "./SelectField";
import VARIABLE_TEMPLATES from "@/app/_constants/templates/variableTemplates";

export default function VariableSelectField({ item }) {
  const { changeVariableType } = useVariableStore()
  
  let existingTypes = []
  
  Object.values(VARIABLE_TEMPLATES).forEach((template) => {
    if (!existingTypes.includes(template.type)) {
      existingTypes.push(template.type)
    }
  })

  function saveValue(value) {
    changeVariableType(item.id, value)
  }

  return (
    <SelectField
      title={"Tipo"}
      defaultValue={item.type}
      saveValue={saveValue}
    >
      {existingTypes.map((type, index) => (
        <option 
          key={index}
          value={type}
        >
          {type}
        </option>
      ))}
    </SelectField> 
  )
}