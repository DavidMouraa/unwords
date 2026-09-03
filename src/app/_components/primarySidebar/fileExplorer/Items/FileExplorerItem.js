import useFileManagerStore from "@/store/useFileManagerStore";
import usePrimarySidebarStore from "@/store/usePrimarySidebar";
import { useEffect, useRef } from "react";
import ContextMenu from "../../../contextMenu/ContextMenu";
import ExplorerItem from "../../ExplorerItem";

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

  useEffect(() => {
    console.log(isActiveFile)
  }, [isActiveFile])
  
  return (
    <ContextMenu
      itemKeys={contextMenuOptionsKeys}
      itemId={item.id}
    >
      <div
        className={`flex flex-col justify-center`}
      >
        <ExplorerItem 
          Icon={Icon} 
          draggable={true}
          onClick={onClick}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          onDrop={onDrop}
          item={item}
          renameItem={renameItem}
          contextMenuOptionsKeys={contextMenuOptionsKeys}
          className={isActiveFile ? "bg-primary-400" : ""}
        />

        {item.type === "folder" && children}
      </div>
    </ContextMenu>
  )
}