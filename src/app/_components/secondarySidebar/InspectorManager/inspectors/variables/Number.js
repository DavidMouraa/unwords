import Input from "../../inputs/Input"
import VariableInspector from "./VariableInspector"

export default function Number({ item }) {
  return (
    <VariableInspector
      item={item}
    >
      <Input
        itemId={item.id}
        label={"Valor"}
        defaultValue={item.data.value}
        action={() => {}}
      />
    </VariableInspector>
  )
}