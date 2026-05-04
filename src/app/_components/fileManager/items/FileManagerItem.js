import useFileManagerStore from "@/store/useFileManagerStore"

export default function FileManagerItem({ children, itemId, onClick }) {
  const { activeFileId, setDraggingItemId } = useFileManagerStore()

  const isActive = itemId === activeFileId

  function onDragStart() {
    setDraggingItemId(itemId)
  }

  function onDragEnd() {
    setDraggingItemId(null)
  }

  return (
    <div 
      className={`p-1 rounded-sm hover:bg-[#0f0f0f] text-[#c9c9c9] hover:text-white ${isActive && "bg-[#0f0f0f]"} cursor-pointer`}
      draggable
      onClick={onClick}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {children}
    </div>
  )
}