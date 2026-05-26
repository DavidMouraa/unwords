import useFileManagerStore from "@/store/useFileManagerStore"
import ContextMenu from "../../contextMenu/ContextMenu"
import { useCallback, useEffect, useRef } from "react"

export default function FileManagerItem({ children, item, Icon, action, extraItemKeys=[] }) {
  const { 
    activeFileId, 
    renamingItemId,
    setDraggingItemId, 
    setRenamingItemId,
    setFileName,
  } = useFileManagerStore()

  const inputRef = useRef(null)

  const isActive = item.id === activeFileId
  const isRenaming = item.id === renamingItemId

  const itemKeys = [...extraItemKeys, "renameItem", "deleteItem"]

  const saveItemName = useCallback(() => {
    if (inputRef.current) {
      setFileName(inputRef.current.value)
    }
    setRenamingItemId(null)
  }, [setFileName, setRenamingItemId])

  function onDragStart() {
    setDraggingItemId(item.id)
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
        draggable={!isRenaming}
        onClick={action}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div 
          className={`flex items-center gap-1.5 p-1 rounded-sm  text-secondary-500 hover:text-white cursor-pointer ${isActive || isRenaming ? "bg-primary-400 hover:bg-primary-400 text-white" : "hover:bg-primary-600"}`}
        >
          <Icon
            className="w-5"
          />
          {isRenaming ? (
            <input
              ref={inputRef}
              className="w-full px-1 rounded-sm outline-none bg-primary-600 "
              type="text"
              defaultValue={item.id}
              onKeyDown={onKeyDown}
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <span className="w-full truncate">
              {item.data.label}
            </span>
          )}
        </div>

        {item.type === "folder" && (
          children
        )}
      </div>
    </ContextMenu>
  )
}