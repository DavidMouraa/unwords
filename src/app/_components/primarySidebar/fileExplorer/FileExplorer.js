import useFileManagerStore from "@/store/useFileManagerStore"
import FileExplorerItemRenderer from "./FileExplorerItemRederer"
import SidebarSection from "../SidebarSection"

export default function FileExplorer() {
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
    <SidebarSection
      label={"Projeto"}
      contextMenuOptionsKeys={contextMenuOptionsKeys}
      onClick={onClick}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div>
        {rootItems.map((item) => (
          <FileExplorerItemRenderer
            key={item.id}
            item={item}
            layer={0}
          />
        ))}
      </div>
    </SidebarSection>
  )
}