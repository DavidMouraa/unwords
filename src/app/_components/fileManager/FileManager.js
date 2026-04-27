"use client"

import useFileManagerStore from "@/store/useFileManagerStore"
import RenderItems from "./RenderItems"
import ContextMenu from "../contextMenu/ContextMenu"

export default function FileManager() {
  const { items } = useFileManagerStore()

  const rootItems = Object.values(items).filter((item) => item.parentId === null)

  const itemKeys = ["createTextFile"]

  return (
    <ContextMenu
      itemKeys={itemKeys}
    >
      <div className="w-full h-full p-2 bg-[#1a1a1a]">
        {rootItems.map((item) => (
          <RenderItems 
            key={item.id}
            itemId={item.id}
            items={items}
          />
        ))}
      </div>
    </ContextMenu>
  )
}