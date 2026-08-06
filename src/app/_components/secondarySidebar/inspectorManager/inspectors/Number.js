import Input from "../InspectorsFields/Input";
import VariableInspector from "./VariableInspector";

export default function Number({ item }) {
  return (
    <VariableInspector
      item={item}
    >
      <Input 
        label={"Valor Inicial"}
        defaultValue={item.data.value}
      />
    </VariableInspector>
  )
}