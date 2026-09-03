import usePrimarySidebarStore from "@/store/usePrimarySidebar";
import { useEffect, useRef } from "react";
import ContextMenu from "../contextMenu/ContextMenu";

export default function ExplorerItem({ 
    item,
    Icon,
    contextMenuOptionsKeys,
    draggable,
    onClick,
    onDragStart,
    onDragOver,
    onDrop,
    onDragEnd,
    layer,
    renameItem,
    className,
  }) {
    const { renamingItemId, setRenamingItemId } = usePrimarySidebarStore()

    const inputRef = useRef(null)

    const isRenaming = renamingItemId === item.id

    const indentGuides = Array.from({ length: layer })

    function handleKeyDown(event) {
      if (event.key === "Enter") {
        renameItem(item.id, event.target.value)
        
        setRenamingItemId(null)
      }
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
  
  return (
    <ContextMenu
      itemKeys={contextMenuOptionsKeys}
      itemId={item.id}
    >
      <div 
        className={`flex h-7 p-2 ${!isRenaming ? "hover:bg-primary-600" : "bg-primary-400"} ${className}  hover:text-white cursor-pointer`}
        draggable={draggable}
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
    </ContextMenu>
  )
}