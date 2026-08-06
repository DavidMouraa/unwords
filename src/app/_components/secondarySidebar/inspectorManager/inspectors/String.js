import TextArea from "../InspectorsFields/TextArea";
import VariableInspector from "./VariableInspector";

export default function String({ item }) {
  

  return (
    <VariableInspector
      item={item}
    >
      <TextArea 
        label={"Valor Inicial"}
        defaultValue={item.data.value}
      />      
    </VariableInspector>
  )
}