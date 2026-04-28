import { IoClose } from "react-icons/io5";
import useFileManagerStore from "@/store/useFileManagerStore";

export default function Tab({ itemId, data }) {
  const { activedFileId, openFile, closeFile } = useFileManagerStore()

  const isActived = itemId === activedFileId

  return (
    <div 
      className={`group flex justify-center items-center gap-2 h-full w-max p-2 border-r-2 border-black ${isActived && "bg-[#2b2b2b]"} text-[#c9c9c9] hover:text-white cursor-pointer`}
      onClick={() => openFile(itemId)}
    >
      {data.label}
      <IoClose 
        className={`invisible ${isActived && "visible"} group-hover:visible rounded-sm hover:bg-[#3b3b3b] text-lg`}
        onClick={(event) => {
          event.stopPropagation()
          closeFile(itemId)
        }}
      />
    </div>
  )
}