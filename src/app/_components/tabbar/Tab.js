import { IoClose } from "react-icons/io5";
import useFileManagerStore from "@/store/useFileManagerStore";
import FILE_ICONS_MAP from "@/app/_constants/maps/filesIconsMap";

export default function Tab({ itemId, data }) {
  const { 
    items,
    activeFileId,
    openFile,
    closeFile 
  } = useFileManagerStore()

  const file = items[itemId]
  const FileIcon = FILE_ICONS_MAP[file.type]
  const isActive = itemId === activeFileId

  return (
    <div 
      className={`group flex justify-center items-center gap-2 h-full w-max p-2 rounded-sm ${isActive ? "bg-primary-400" : "bg-primary-500"} text-secondary-500 hover:text-white cursor-pointer`}
      onClick={() => openFile(itemId)}
    >
      <div className="flex items-center gap-1">
        <FileIcon />
        {data.label}
      </div>
      <button
        className={`invisible ${isActive && "visible"} disabled:hidde
        
        group-hover:visible rounded-sm hover:bg-[#3b3b3b] text-lg cursor-pointer`}
        onClick={(event) => {
          event.stopPropagation()
          closeFile(itemId)
        }}
        disabled={itemId === "main"}
      >
        <IoClose />
      </button>
    </div>
  )
}