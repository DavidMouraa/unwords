import ContextMenu from "@/app/_components/contextMenu/ContextMenu";
import Section from "../Section";
import useVariableManagerStore from "@/store/useVariableManagerStore";
import RenderItems from "./items/RenderItems";

export default function VariableManager({ currentSection, setCurrentSection }) {
  const { variables } = useVariableManagerStore()

  const contextMenuOptionsKeys = ["createVariable"]

  return (
    <Section
      title={"Variaveis"}
      sectionTitle={"variable-manager"}
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    >
      <ContextMenu
        itemKeys={contextMenuOptionsKeys}
        
      >
        <div
          className="h-full"
        >
          {Object.values(variables).map((variable) => (
            <RenderItems 
              key={variable.id}
              item={variable}
            />
          ))}
        </div>
      </ContextMenu>
    </Section>
  )
}