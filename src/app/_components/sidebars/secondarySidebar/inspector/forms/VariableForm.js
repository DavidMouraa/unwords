import useVariableStore from "@/store/useVariablesStore";
import InputField from "../fields/InputField";
import VariableSelectField from "../fields/VariableSelectField";
import Form from "./Form";

export default function VariableForm({ children, item }) {
  const { renameVariable } = useVariableStore()

  function saveValue(value) {
    renameVariable(item.id, value)
  }

  return (
    <Form>
      <InputField 
        title={"Nome"}
        defaultValue={item.label}
        saveValue={saveValue}
      />
      <VariableSelectField
        item={item}
      />
      {children}
    </Form>
  )
}