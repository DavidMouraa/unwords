import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import useFileManagerStore from "@/store/useFileManagerStore";
import FileExplorerItem from "./FileExplorerItem";
import FileExplorerItemRenderer from "../FileExplorerItemRederer";

export default function Folder({ item, layer }) {
  const { 
    items, 
    openFoldersId,
    openFolder,
    closeFolder, 
  } = useFileManagerStore()

  const isOpen = openFoldersId.includes(item.id)
  const Icon = isOpen ? FaChevronDown : FaChevronRight

  const contextMenuOptionsKeys = ["createFolder", "createFile", "deleteFolder", "renameItem"]

  const childItems = Object.values(items).filter((childItem) => childItem.parentId === item.id)

  function toggleFolder() {
    isOpen ? closeFolder(item.id) : openFolder(item.id) 
  }

  return (
    <FileExplorerItem
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
          <FileExplorerItemRenderer
            key={childItem.id}
            item={childItem}
            layer={layer + 1}
          />
        ))}
      </div>
    </FileExplorerItem>
  )
}