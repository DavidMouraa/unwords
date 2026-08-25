import ContextMenu from "@/app/_components/contextMenu/ContextMenu"
import useFileManagerStore from "@/store/useFileManagerStore"
import FileExplorerItemRenderer from "./FileExplorerItemRederer"

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
    <ContextMenu
      itemKeys={contextMenuOptionsKeys}
    >
      <div 
        className={`flex flex-col h-full text-sm text-secondary-500`}
        onClick={onClick}
        onDragOver={onDragOver}
        onDrop={onDrop}
      > 
        <div 
          className="flex items-center gap-1.5 px-2 py-1 border-y border-primary-600 font-bold uppercase"
        >
          Projeto
        </div>
        <div>
          <div
          >
            {rootItems.map((item) => (
              <FileExplorerItemRenderer
                key={item.id}
                item={item}
                layer={0}
              />
            ))}
          </div>
        </div>
      </div>
    </ContextMenu>
  )
}