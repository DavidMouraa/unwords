import useFileManagerStore from "@/store/useFileManagerStore"
import FileManagerItem from "./FileManagerItem"
import { FaFolder } from "react-icons/fa";
import RenderItems from "../RenderItems";

export default function Folder({ itemId, layer }) {
  const { items, openFoldersId } = useFileManagerStore()

  const folder = items[itemId]
  const folderItemKeys = ["createFolder", "createTextFile", "deleteFolder"]

  const childItems = Object.values(items).filter((item) => item.parentId === itemId)

  return (
    <FileManagerItem
      item={folder}
      layer={layer}
      Icon={FaFolder}
      action={() => {}}
      extraItemKeys={folderItemKeys}
    >
      <div className="relative">
        {childItems.map((item, index) => (
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