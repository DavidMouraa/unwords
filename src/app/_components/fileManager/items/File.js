import ContextMenu from "../../contextMenu/ContextMenu";
import FileManagerItem from "./FileManagerItem";
import useFileManagerStore from "@/store/useFileManagerStore";

export default function File({ children, itemId }) {
  const { openFile } = useFileManagerStore()

  const itemKeys = ["deleteItem"]

  return (
    <ContextMenu
      itemId={itemId}
      itemKeys={itemKeys}
    >
      <FileManagerItem
        onClick={() => openFile(itemId)}
      >
        {children}
      </FileManagerItem>
    </ContextMenu>
  )
}