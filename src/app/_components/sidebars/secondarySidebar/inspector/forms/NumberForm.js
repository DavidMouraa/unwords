import useVariableStore from "@/store/useVariablesStore";
import InputField from "../fields/InputField";
import VariableForm from "./VariableForm";

export default function NumberForm({ item }) {
  const { setVariableValue } = useVariableStore()

  function saveValue(value) {
    setVariableValue(item.id, value)
  }

  return (
    <VariableForm
      item={item}
    >
      <InputField 
        title={"Valor"}
        defaultValue={item.data.value}
        saveValue={saveValue}
      />
    </VariableForm>
  )
}