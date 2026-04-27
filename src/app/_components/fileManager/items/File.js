import ContextMenu from "../../contextMenu/ContextMenu";
import Item from "./Item";
import useFileManagerStore from "@/store/useFileManagerStore";

export default function File({ children, id }) {
  const { openFile } = useFileManagerStore()

  const itemKeys = ["deleteItem"]

  return (
    <ContextMenu
      itemId={id}
      itemKeys={itemKeys}
    >
      <Item
        onClick={() => openFile(id)}
      >
        {children}
      </Item>
    </ContextMenu>
  )
}