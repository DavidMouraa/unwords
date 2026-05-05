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
      className={`p-1 rounded-sm hover:bg-primary-600 text-secondary-500 hover:text-white ${isActive && "bg-primary-600"} cursor-pointer`}
      draggable
      onClick={onClick}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {children}
    </div>
  )
}