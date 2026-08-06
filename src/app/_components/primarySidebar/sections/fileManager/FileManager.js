import Section from "../Section"
import useFileManagerStore from "@/store/useFileManagerStore"
import RenderItems from "./Items/RenderItems"

export default function FileManager() {
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
      contextMenuOptionsKeys={contextMenuOptionsKeys}
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
    </Section>
  )
}