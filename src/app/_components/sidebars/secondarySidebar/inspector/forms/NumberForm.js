import useVariableStore from "@/store/useVariablesStore";
import VariableForm from "./VariableForm";
import NumberField from "../fields/NumberField";

export default function NumberForm({ item }) {
  const { setVariableValue } = useVariableStore()

  function saveValue(value) {
    setVariableValue(item.id, value)
  }

  return (
    <VariableForm
      item={item}
    >
      <NumberField
        title={"Valor"}
        defaultValue={item.data.value}
        saveValue={saveValue}
      />
    </VariableForm>
  )
}