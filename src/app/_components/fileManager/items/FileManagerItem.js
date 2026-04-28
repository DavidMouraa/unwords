import useFileManagerStore from "@/store/useFileManagerStore"

export default function FileManagerItem({ children, itemId, onClick }) {
  const { activedFileId } = useFileManagerStore()

  const isActive = itemId === activedFileId

  return (
    <div 
      className={`p-1 rounded-sm hover:bg-[#0f0f0f] text-[#c9c9c9] hover:text-white ${isActive && "bg-[#0f0f0f]"} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}