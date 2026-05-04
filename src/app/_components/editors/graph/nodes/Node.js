import ContextMenu from "@/app/_components/contextMenu/ContextMenu"
import Pin from "../pins/Pin"
import useFileManagerStore from "@/store/useFileManagerStore";
import { FaFileCirclePlus } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import useGraphEditorStore from "@/store/useGraphEditorStore";


export default function Node({ children, selected, id, type, label, color }) {
  const { items, draggingItemId } = useFileManagerStore()
  const { setNodeFileId } = useGraphEditorStore()
  
  const draggingItem = items[draggingItemId]
  const isDraggingItemSameType = draggingItem?.type === type

  const contextMenuItemKeys = ["deleteNode"]

  function onDragOver(event) {
    event.preventDefault()
  }

  function onDrop(event) {
    event.stopPropagation()

    setNodeFileId(id, draggingItemId)
  }

  return (
    <ContextMenu
      nodeId={id}
      itemKeys={contextMenuItemKeys}
    >
      <div 
        style={{ borderColor: `${selected ? color : "black"}` }}
        className={`rounded-sm border overflow-clip shadow-[0px_0px_10px_1px_#00000066] text-white`}
      >
        <div 
          style={{ background: color }}
          className="flex items-center gap-1 p-1 bg-white"
        >
          <IoDocumentText />
          {label}
        </div>
        <div className="relative flex items-center gap-1 p-1 bg-[#000000c9] backdrop-blur-xs">
          <div>
            <Pin 
              type="target"
              position="left"
            />
          </div>

          {children}

          <div>
            <Pin 
              type="source"
              position="right"
            />
          </div>

          <div 
            className={`${isDraggingItemSameType ? "absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-1.5 rounded-sm bg-[#000000f3] text-[0.6rem]" : "hidden"}`}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <FaFileCirclePlus 
              className="text-xl"
            />
          </div>
        </div>
      </div>
    </ContextMenu>
  )
}