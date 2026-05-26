import FileManagerItem from "./FileManagerItem";
import useFileManagerStore from "@/store/useFileManagerStore";
import FILE_ICONS_MAP from "@/app/_constants/maps/filesIconsMap";

export default function File({ itemId, layer }) {
  const { items } = useFileManagerStore()
  const { openFile } = useFileManagerStore()

  const file = items[itemId]

  const FileIcon = FILE_ICONS_MAP[file.type]

  const extraItemKeys = ["deleteFile"]

  return (
    <FileManagerItem
      item={file}
      layer={layer}
      Icon={FileIcon}
      action={() => openFile(itemId)}
      extraItemKeys={extraItemKeys}
    >
      {file.data.label}
    </FileManagerItem>
  )
}