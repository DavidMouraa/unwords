import FileManagerItem from "./FileManagerItem";
import useFileManagerStore from "@/store/useFileManagerStore";
import FILE_ICONS_MAP from "@/app/_constants/maps/filesIconsMap";

export default function File({ itemId }) {
  const { items } = useFileManagerStore()
  const { openFile } = useFileManagerStore()

  const file = items[itemId]

  const FileIcon = FILE_ICONS_MAP[file.type]

  return (
    <FileManagerItem
      item={file}
      Icon={FileIcon}
      action={() => openFile(itemId)}
    >
      {file.data.label}
    </FileManagerItem>
  )
}