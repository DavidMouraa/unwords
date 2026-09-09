import useVariableStore from "@/store/useVariablesStore";
import TextAreaField from "../fields/TextAreaField";
import VariableForm from "./VariableForm";

export default function StringForm({ item }) {
  const { setVariableValue } = useVariableStore()

  function saveValue(value) {
    setVariableValue(item.id, value)
  }

  return (
    <VariableForm
      item={item}
    >
      <TextAreaField 
        title={"Valor"}
        defaultValue={item.data.value}
        saveValue={saveValue}
      />
    </VariableForm>
  )
}