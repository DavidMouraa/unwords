import ContextMenu from "../../contextMenu/ContextMenu";
import FileManagerItem from "./FileManagerItem";
import useFileManagerStore from "@/store/useFileManagerStore";
import FILE_ICONS_MAP from "@/app/_constants/filesIconsMap";

export default function File({ itemId }) {
  const { items } = useFileManagerStore()
  const { openFile } = useFileManagerStore()

  const file = items[itemId]
  const itemKeys = ["deleteItem"]

  const FileIcon = FILE_ICONS_MAP[file.type]

  return (
    <ContextMenu
      itemId={itemId}
      itemKeys={itemKeys}
    >
      <FileManagerItem
        itemId={itemId}
        onClick={() => openFile(itemId)}
      >
        <div className="flex items-center gap-1.5">
          <FileIcon />
          {file.data.label}
        </div>
      </FileManagerItem>
    </ContextMenu>
  )
}