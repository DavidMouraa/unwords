import useFileManagerStore from "@/store/useFileManagerStore"
import ContextMenu from "../../contextMenu/ContextMenu"
import { useCallback, useEffect, useRef } from "react"

export default function FileManagerItem({ children, item, layer, Icon, action, itemKeys }) {
  const { 
    activeFileId, 
    renamingItemId,
    draggingItemId,
    setItemParentId,
    setDraggingItemId, 
    setRenamingItemId,
    setFileName,
    openFolder,
  } = useFileManagerStore()

  const inputRef = useRef(null)

  const isActive = item.id === activeFileId
  const isRenaming = item.id === renamingItemId

  const indentGuides = Array.from({ length: layer })

  const saveItemName = useCallback(() => {
    if (inputRef.current) {
      setFileName(inputRef.current.value)
    }
    setRenamingItemId(null)
  }, [setFileName, setRenamingItemId])

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

  function onKeyDown(event) {
    if (event.key === "Enter") saveItemName()
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
    if (!isRenaming) return
    
    function cancelRenaming(event) {
      if (!inputRef.current?.contains(event.target)) saveItemName()
    }

    window.addEventListener("click", cancelRenaming)
    
    return () => {
      window.removeEventListener("click", cancelRenaming)
    }
  }, [isRenaming, saveItemName])

  return (
    <ContextMenu
      itemId={item.id}
      itemKeys={itemKeys}
    >
      <div 
        className="relative"
        draggable={!isRenaming}
        onClick={action}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
      >
        <div
          className={`flex items-center gap-1 rounded-sm  text-secondary-500 hover:text-white cursor-pointer ${isActive || isRenaming ? "bg-primary-400 hover:bg-primary-400 text-white" : "hover:bg-primary-600"}`}
        >
          {indentGuides.map((_, index) => (
            <div 
              key={index}
              className={`h-7 border-l border-primary-300 shrink-0 ${index !== 0 ? "w-1 ml-1" : "border-none"}`}
            />
          ))}
          <Icon
            className="min-w-5"
          />
          {isRenaming ? (
            <input
              ref={inputRef}
              className="w-full px-1 rounded-sm outline-none bg-primary-600 "
              type="text"
              defaultValue={item.data.label}
              onKeyDown={onKeyDown}
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <span className="w-full truncate">
              {item.data.label}
            </span>
          )}
        </div>

        {item.type === "folder" && children}
      </div>
    </ContextMenu>
  )
}