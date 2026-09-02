import useFileManagerStore from "@/store/useFileManagerStore";
import usePrimarySidebarStore from "@/store/usePrimarySidebar";
import { useEffect, useRef } from "react";
import ContextMenu from "../../../contextMenu/ContextMenu";

export default function FileExplorerItem({ 
    children,
    item, 
    layer, 
    Icon,
    contextMenuOptionsKeys,
    onClick,
  }) {

    const { 
      activeFileId, 
      draggingItemId,
      openFolder,
      renameItem,
      setDraggingItemId, 
      setItemParentId,
    } = useFileManagerStore()

    const { renamingItemId, setRenamingItemId } = usePrimarySidebarStore()

    const inputRef = useRef(null)

    const isRenaming = renamingItemId === item.id
    const indentGuides = Array.from({ length: layer })
    const isActiveFile = item.id === activeFileId

    function handleKeyDown(event) {
      if (event.key === "Enter") {
        renameItem(item.id, event.target.value)
        
        setRenamingItemId(null)
      }
    }

    function onDragStart(event) {
      event.stopPropagation()

      setDraggingItemId(item.id)
    }

    function onDragOver(event) {
      event.preventDefault()
    }

    function onDrop(event) {
      event.stopPropagation()

      if (draggingItemId !== item.id) {
        openFolder(item.id)
        item.type === "folder" ? setItemParentId(draggingItemId, item.id) : setItemParentId(draggingItemId, item.parentId)
      }
    }

    function onDragEnd() {
      setDraggingItemId(null)
    }

    useEffect(() => {
    if (isRenaming && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current.select()
      }, 0)

      return () => clearTimeout(timer)
    }
  }, [isRenaming])

  useEffect(() => {
    function cancelRenaming(event) {
      setRenamingItemId(null)
    }

    window.addEventListener("click", cancelRenaming)

    return () => {
      window.removeEventListener("click", cancelRenaming)
    }
  }, [])

  if (item.type === "graph") return null
  
  return (
    <ContextMenu
      itemKeys={contextMenuOptionsKeys}
      itemId={item.id}
    >
      <div
        className={`flex flex-col justify-center`}
      >
        <div 
          className={`flex h-7 p-2 ${!isRenaming ? "hover:bg-primary-600" : "bg-primary-400"}  hover:text-white cursor-pointer`}
          draggable={true}
          onClick={onClick}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragEnd={onDragEnd}
        >
          {indentGuides.map((_, index) => (
            <div 
              key={index}
              className={`h-full border-l w-2 ml-1 border-primary-300`}
            />
          ))}
          <div className="flex items-center gap-1 w-full">
            <Icon 
              className="w-5"
            />

            {isRenaming ? (
              <input 
                ref={inputRef}
                className="w-full px-1 rounded-sm outline-0 bg-primary-600"
                type="text"
                defaultValue={item.label}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <span 
                className="truncate"
              >
                {item.label}
              </span>
            )}
          </div>
        </div>

        {item.type === "folder" && children}
      </div>
    </ContextMenu>
  )
}