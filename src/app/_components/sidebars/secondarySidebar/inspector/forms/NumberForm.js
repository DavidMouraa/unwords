import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";
import VariableSelectField from "../fields/VariableSelectField";
import Form from "./Form";

export default function NumberForm({ item }) {
  return (
    <Form>
      <InputField 
        title={"Nome"}
        defaultValue={item.label}
      />
      <VariableSelectField
        item={item}
      />
      <InputField 
        title={"Valor"}
        defaultValue={item.data.value}
      />
    </Form>
  )
}