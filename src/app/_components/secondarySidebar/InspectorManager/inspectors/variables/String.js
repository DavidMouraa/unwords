import TextArea from "../../inputs/TextArea"
import Input from "../../inputs/Input"
import VariableSelect from "../../inputs/VariableSelect"
import useVariableManagerStore from "@/store/useVariableManagerStore"
import VariableInspector from "./VariableInspector"

export default function String({ item }) {
  const { renameVariable } = useVariableManagerStore()

  return (
    <VariableInspector
      item={item}
    >
      <TextArea 
        label={"Valor"}
        defaultValue={item.data.value}
      />
    </VariableInspector>
  )
}