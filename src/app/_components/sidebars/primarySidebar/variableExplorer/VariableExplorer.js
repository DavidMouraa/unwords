import useVariableStore from "@/store/useVariablesStore";
import SidebarSection from "../SidebarSection";
import VariableExplorerItemRenderer from "./VariableExplorerItemRenderer";

export default function VariableExplorer() {
  const { variables } = useVariableStore()

  const contextMenuOptionsKeys = ["createVariable"]

  return (
    <SidebarSection
      label={"Variaveis"}
      contextMenuOptionsKeys={contextMenuOptionsKeys}
    >
      {Object.values(variables).map((variable) => ( 
        <VariableExplorerItemRenderer 
          key={variable.id}
          item={variable}
        />
      ))}
    </SidebarSection>
  )
}