import TextArea from "../../InspectorsFields/TextArea";
import VariableInspector from "../VariableInspector";
import useVariableManagerStore from "@/store/useVariableManagerStore";

export default function String({ item }) {
  const { changeVariableValue } = useVariableManagerStore()

  function valueInputAction(newValue) {
    changeVariableValue(item.id, newValue)
  }

  return (
    <VariableInspector
      item={item}
    >
      <TextArea 
        label={"Valor Inicial"}
        defaultValue={item.data.value}
        action={valueInputAction}
      />      
    </VariableInspector>
  )
}