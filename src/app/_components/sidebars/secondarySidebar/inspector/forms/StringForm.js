import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";
import TextAreaField from "../fields/TextAreaField";
import Form from "./Form";

export default function StringForm() {
  return (
    <Form>
      <InputField 
        title={"Nome"}
      />
      <SelectField
        title={"Tipo"}
      >
        <option>Number</option>
      </SelectField>
      <TextAreaField 
        title={"Valor"}
      />
    </Form>
  )
}