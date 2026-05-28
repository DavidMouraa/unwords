import useFileManagerStore from "@/store/useFileManagerStore"
import FileManagerItem from "./FileManagerItem"
import { FaFolder } from "react-icons/fa"
import { FaFolderOpen } from "react-icons/fa6"
import RenderItems from "../RenderItems"

export default function Folder({ itemId, layer }) {
  const { 
    items, 
    openFoldersId, 
    openFolder,
    closeFolder,
  } = useFileManagerStore()

  const folder = items[itemId]
  const itemKeys = ["createFolder", "createFile", "renameItem", "deleteFolder"]

  const isOpen = openFoldersId.includes(itemId)
  const Icon = isOpen ? FaFolderOpen : FaFolder

  const childItems = Object.values(items).filter((item) => item.parentId === itemId)

  function toggleFolder(event) {
    event.stopPropagation()

    !isOpen ? openFolder(itemId) : closeFolder(itemId)
  }

  return (
    <FileManagerItem
      item={folder}
      layer={layer}
      Icon={Icon}
      action={toggleFolder}
      itemKeys={itemKeys}
    >
      <div>
        {isOpen && childItems.map((item) => (
          <div 
            key={item.id}
          >
            <RenderItems
              itemId={item.id}
              items={items}
              layer={layer + 1}
            />
          </div>
        ))}
      </div>
    </FileManagerItem>
  )
}