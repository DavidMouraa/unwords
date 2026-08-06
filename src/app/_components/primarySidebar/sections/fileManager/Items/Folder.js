import { useState } from "react";
import Item from "./Item";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import useFileManagerStore from "@/store/useFileManagerStore";
import RenderItems from "./RenderItems";

export default function Folder({ item, layer }) {
  const { 
    items, 
    openFoldersId,
    openFolder,
    closeFolder, 
  } = useFileManagerStore()

  const isOpen = openFoldersId.includes(item.id)
  const Icon = isOpen ? FaChevronDown : FaChevronRight

  const contextMenuOptionsKeys = ["createFolder", "createFile", "deleteFolder"]

  const childItems = Object.values(items).filter((childItem) => childItem.parentId === item.id)

  function toggleFolder() {
    isOpen ? closeFolder(item.id) : openFolder(item.id) 
  }

  return (
    <Item 
      item={item}
      layer={layer}
      Icon={Icon}
      contextMenuOptionsKeys={contextMenuOptionsKeys}
      onClick={toggleFolder}
    >
      <div
        className={`overflow-hidden ${!isOpen ? "h-0" : ""}`}
      >
        {childItems.map((childItem) => (
          <RenderItems 
            key={childItem.id}
            item={childItem}
            layer={layer + 1}
          />
        ))}
      </div>
    </Item>
  )
}