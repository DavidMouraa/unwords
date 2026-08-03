import ContextMenu from "@/app/_components/contextMenu/ContextMenu";
import useFileManagerStore from "@/store/useFileManagerStore";
import { default as DefaultItem } from "../../item";

export default function Item({ 
    children,
    item, 
    layer, 
    Icon, 
    contextMenuOptionsKeys, 
    onClick,
  }) {

    const { 
      activeFileId, 
      draggingItemId,
      openFolder,
      setDraggingItemId, 
      setItemParentId,
    } = useFileManagerStore()

    const isActiveFile = item.id === activeFileId

    function onDragStart(event) {
      event.stopPropagation()

      setDraggingItemId(item.id)
    }

    function onDragOver(event) {
      event.preventDefault()
    }

    function onDrop(event) {
      event.stopPropagation()

      if (draggingItemId !== item.id) {
        openFolder(item.id)
        item.type === "folder" ? setItemParentId(draggingItemId, item.id) : setItemParentId(draggingItemId, item.parentId)
      }
    }

    function onDragEnd() {
      setDraggingItemId(null)
    }
  
  return (
    <div
      className={`flex flex-col justify-center`}
    >
      <DefaultItem 
        item={item}
        className={`${isActiveFile ? "bg-primary-400" : ""}`}
        contextMenuOptionsKeys={contextMenuOptionsKeys}
        Icon={Icon}
        draggable={true}
        onClick={onClick}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        layer={layer}
      />

      {item.type === "folder" && children}
    </div>
  )
}