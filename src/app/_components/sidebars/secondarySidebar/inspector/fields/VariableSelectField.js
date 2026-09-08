import useVariableStore from "@/store/useVariablesStore";
import SelectField from "./SelectField";

export default function VariableSelectField({ item }) {
  const { variables, changeVariableType } = useVariableStore()
  
  let existingTypes = []
  
  Object.values(variables).forEach((variable) => {
    if (!existingTypes.includes(variable.type)) {
      console.log(variable.type)
      existingTypes.push(variable.type)
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