import FILE_ICONS_MAP from "@/app/_constants/maps/filesIconsMap"
import Item from "./Item"
import useFileManagerStore from "@/store/useFileManagerStore"

export default function File({ item, layer }) {
  const { openFile } = useFileManagerStore()

  const Icon = FILE_ICONS_MAP[item.type]

  const contextMenuOptionsKeys = ["deleteFile"]

  function handleClick() {
    openFile(item.id)
  }

  return (
    <Item 
      item={item}
      layer={layer}
      Icon={Icon}
      contextMenuOptionsKeys={contextMenuOptionsKeys}
      onClick={handleClick}
    />
  )
}