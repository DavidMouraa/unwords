import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";
import Form from "./Form";

export default function NumberForm() {
  return (
    <Form>
      <InputField 
        title={"Nome"} 
      />
      <SelectField
        title={"Tipo"}
      >

      </SelectField>
      <InputField 
        title={"Valor"}
      />
    </Form>
  )
}