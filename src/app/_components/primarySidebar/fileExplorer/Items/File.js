import FILE_ICONS_MAP from "@/app/_constants/maps/filesIconsMap"
import useFileManagerStore from "@/store/useFileManagerStore"
import FileExplorerItem from "./FileExplorerItem"

export default function File({ item, layer }) {
  const { openFile } = useFileManagerStore()

  const Icon = FILE_ICONS_MAP[item.type]

  const contextMenuOptionsKeys = ["renameItem", "deleteFile"]

  function handleClick() {
    openFile(item.id)
  }

  return (
    <FileExplorerItem
      item={item}
      layer={layer}
      Icon={Icon}
      contextMenuOptionsKeys={contextMenuOptionsKeys}
      onClick={handleClick}
    />
  )
}