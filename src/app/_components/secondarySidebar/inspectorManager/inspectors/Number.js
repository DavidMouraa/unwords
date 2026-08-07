import useVariableManagerStore from "@/store/useVariableManagerStore";
import Input from "../InspectorsFields/Input";
import VariableInspector from "./VariableInspector";

export default function Number({ item }) {
  const { changeVariableValue } = useVariableManagerStore()

  function valueInputAction(newValue) {
    changeVariableValue(item.id, newValue)
  }

  return (
    <VariableInspector
      item={item}
    >
      <Input 
        label={"Valor Inicial"}
        defaultValue={item.data.value}
        action={valueInputAction}
      />
    </VariableInspector>
  )
}