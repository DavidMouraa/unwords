import FileManagerItem from "./FileManagerItem";
import useFileManagerStore from "@/store/useFileManagerStore";
import FILE_ICONS_MAP from "@/app/_constants/maps/filesIconsMap";

export default function File({ itemId, layer }) {
  const { items, openFile } = useFileManagerStore()

  const file = items[itemId]

  const FileIcon = FILE_ICONS_MAP[file.type]

  const itemKeys = ["renameItem", "deleteFile"]

  function action(event) {
    event.stopPropagation()

    openFile(itemId)
  }

  return (
    <FileManagerItem
      item={file}
      layer={layer}
      Icon={FileIcon}
      onClick={action}
      itemKeys={itemKeys}
    >
      {file.data.label}
    </FileManagerItem>
  )
}