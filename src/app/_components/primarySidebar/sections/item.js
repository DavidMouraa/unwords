import usePrimarySidebarStore from "@/store/usePrimarySidebar"
import ContextMenu from "../../contextMenu/ContextMenu"
import { useEffect, useRef } from "react"

export default function Item({ 
  className,
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
}) {
  const { renamingItemId, setRenamingItem } = usePrimarySidebarStore()

  const inputRef = useRef(null)

  const isRenaming = renamingItemId === item.id

  const indentGuides = Array.from({ length: layer })

  useEffect(() => {
    function handleClick(event) {
      if (!inputRef.current?.contains(event)) {
        renameItem(item.id, inputRef.current?.value)
        setRenamingItem(null)
      }
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <ContextMenu
      itemId={item.id}
      itemKeys={contextMenuOptionsKeys}
    >
      <div 
        className={`flex h-7 p-2 ${!isRenaming ? "hover:bg-primary-600" : "bg-primary-400"} ${className} hover:text-white cursor-pointer`}
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
          <Icon />

          {isRenaming ? (
            <input 
              ref={inputRef}
              className="px-1 rounded-sm outline-0 bg-primary-600"
              type="text" 
            />
          ) : (
            <span 
              className="w-full truncate"
            >
              {item.label}
            </span>
          )}
        </div>
      </div>
    </ContextMenu>
  )
}