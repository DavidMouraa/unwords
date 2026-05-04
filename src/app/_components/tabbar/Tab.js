import { IoClose } from "react-icons/io5";
import useFileManagerStore from "@/store/useFileManagerStore";
import FILE_ICONS_MAP from "@/app/_constants/filesIconsMap";

export default function Tab({ itemId, data }) {
  const { 
    items,
    activeFileId,
    openFile,
    closeFile 
  } = useFileManagerStore()

  const file = items[itemId]
  const FileIcon = FILE_ICONS_MAP[file.type]
  const isActived = itemId === activeFileId

  return (
    <div 
      className={`group flex justify-center items-center gap-2 h-full w-max p-2 border-black rounded-sm bg-[#1a1a1a] ${isActived && "bg-[#2b2b2b]"} text-[#c9c9c9] hover:text-white cursor-pointer`}
      onClick={() => openFile(itemId)}
    >
      <div className="flex items-center gap-1">
        <FileIcon />
        {data.label}
      </div>
      <button
        className={`invisible ${isActived && "visible"} disabled:invisible group-hover:visible rounded-sm hover:bg-[#3b3b3b] text-lg cursor-pointer`}
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