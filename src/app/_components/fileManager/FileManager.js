"use client"

import useFileManagerStore from "@/store/useFileManagerStore"
import RenderItems from "./RenderItems"
import ContextMenu from "../contextMenu/ContextMenu"
import ActionMenu from "./actionMenu/ActionMenu"

export default function FileManager() {
  const { 
    items,
    draggingItemId,
    setSelectedFolder,
    setItemParentId,
  } = useFileManagerStore()

  const rootItems = Object.values(items).filter((item) => item.parentId === null)
  const layer = 1
  const itemKeys = ["createFolder", "createFile"]

  function onClick() {
    setSelectedFolder(null)
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
      itemKeys={itemKeys}
    >
      <ActionMenu />
      
      <div 
        className="relative w-full h-full p-2"
        onClick={onClick}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {rootItems.map((item) => (
          item.id !== "main" && (
            <RenderItems 
              key={item.id}
              itemId={item.id}
              items={items}
              layer={layer}
            />
          )
        ))}
      </div>
    </ContextMenu>
  )
}