import { IoClose } from "react-icons/io5";
import useFileManagerStore from "@/store/useFileManagerStore";
import FILE_ICONS_MAP from "@/app/_constants/maps/filesIconsMap";

export default function Tab({ item }) {
  const { 
    activeFileId,
    openFile,
    closeFile 
  } = useFileManagerStore()

  const FileIcon = FILE_ICONS_MAP[item.type]
  const isActive = item.id === activeFileId

  return (
    <div 
      className={`group flex justify-center items-center gap-2 h-full w-max p-2 rounded-sm ${isActive ? "bg-primary-400" : "bg-primary-500"} text-secondary-500 hover:text-white cursor-pointer`}
      onClick={() => openFile(item.id)}
    >
      <div className="flex items-center gap-1">
        <FileIcon />
        <span className="text-nowrap">{item.label}</span>
      </div>
      <button
        className={`invisible ${isActive && "visible"}
        group-hover:visible rounded-sm hover:bg-primary-300 text-lg cursor-pointer`}
        onClick={(event) => {
          event.stopPropagation()
          closeFile(item.id)
        }}
      >
        <IoClose />
      </button>
    </div>
  )
}