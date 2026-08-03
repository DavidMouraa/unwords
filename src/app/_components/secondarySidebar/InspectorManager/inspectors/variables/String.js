import TextArea from "../../inputs/TextArea"
import Input from "../../inputs/Input"
import VariableSelect from "../../inputs/VariableSelect"

export default function String({ item }) {
  console.log(item)

  return (
    <div className="text-secondary-500 text-sm">
      <div className="flex flex-col gap-2 p-2">
        <Input 
          label={"Nome"}
          defaultValue={item.data.label}
        />
        <VariableSelect 
          defaultType={item.type}
        />
        <TextArea 
          label={"Valor"}
          defaultValue={item.data.value}
        />
      </div>
    </div>
  )
}