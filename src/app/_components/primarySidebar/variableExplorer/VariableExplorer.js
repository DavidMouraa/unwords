import useVariableStore from "@/store/useVariablesStore";
import SidebarSection from "../SidebarSection";
import StringVariableItem from "./items/StringVariableItem";

export default function VariableExplorer() {
  const { variables } = useVariableStore()

  return (
    <SidebarSection
      label={"Variaveis"}
    >
      {Object.values(variables).map((variable) => ( 
        <StringVariableItem 
          key={variable.id}
          variable={variable}
        />
      ))}
    </SidebarSection>
  )
}