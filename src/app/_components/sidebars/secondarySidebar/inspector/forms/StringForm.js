import InputField from "../fields/InputField";
import TextAreaField from "../fields/TextAreaField";
import VariableSelectField from "../fields/VariableSelectField";
import Form from "./Form";

export default function StringForm({ item }) {
  return (
    <Form>
      <InputField 
        title={"Nome"}
        defaultValue={item.label}
      />
      <VariableSelectField
        item={item}
      />
      <TextAreaField 
        title={"Valor"}
        defaultValue={item.data.value}
      />
    </Form>
  )
}