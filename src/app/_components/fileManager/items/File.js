import ContextMenu from "../../contextMenu/ContextMenu";
import FileManagerItem from "./FileManagerItem";
import useFileManagerStore from "@/store/useFileManagerStore";

export default function File({ children, itemId }) {
  const { items } = useFileManagerStore()
  const { openFile } = useFileManagerStore()

  const file = items[itemId]
  const itemKeys = ["deleteItem"]

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
          {children}
          {file.data.label}
        </div>
      </FileManagerItem>
    </ContextMenu>
  )
}