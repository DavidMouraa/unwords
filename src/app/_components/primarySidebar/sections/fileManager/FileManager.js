import Section from "../Section"
import useFileManagerStore from "@/store/useFileManagerStore"
import ContextMenu from "@/app/_components/contextMenu/ContextMenu"
import RenderItems from "./RenderItems"

export default function FileManager({ currentSection, setCurrentSection }) {
  const { 
    items,
    setItemParentId,
    setCurrentFolderId,
    draggingItemId,
  } = useFileManagerStore()
  const contextMenuOptionsKeys = ["createFolder", "createFile"]

  const rootItems = Object.values(items).filter((item) => !item.parentId)

  function onClick() {
    setCurrentFolderId(null)
  }

  function onDragOver(event) {
    event.preventDefault()
  }

  function onDrop(event) {
    event.stopPropagation()

    setItemParentId(draggingItemId, null)
  }

  return (
    <Section
      title={"Projeto"}
      sectionTitle={"file-manager"}
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    >
      <ContextMenu
        itemKeys={contextMenuOptionsKeys}
      >
        <div 
          className="h-full"
          onClick={onClick}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          {rootItems.map((item) => (
            <RenderItems
              key={item.id}
              item={item}
              layer={0}
            />
          ))}
        </div>
      </ContextMenu>
    </Section>
  )
}