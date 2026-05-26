import useFileManagerStore from "@/store/useFileManagerStore"
import FileManagerItem from "./FileManagerItem"
import { FaFolder } from "react-icons/fa";
import RenderItems from "../RenderItems";

export default function Folder({ itemId }) {
  const { items, openFoldersId } = useFileManagerStore()

  const folder = items[itemId]
  const folderItemKeys = ["createFolder", "createTextFile"]

  const childItems = Object.values(items).filter((item) => item.parentId === itemId)

  return (
    <FileManagerItem
      item={folder}
      Icon={FaFolder}
      action={() => {}}
      extraItemKeys={folderItemKeys}
    >
      <div className={`ml-3`}>
        {childItems.map((item) => (
          <RenderItems 
            key={item.id}
            itemId={item.id}
            items={items}
            childItems={childItems}
          />
        ))}
      </div>
    </FileManagerItem>
  )
}