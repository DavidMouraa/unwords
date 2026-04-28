import ContextMenu from "@/app/_components/contextMenu/ContextMenu"
import Pin from "../Pin"

export default function Node({ children, id, label, color }) {
  const contextMenuItemKeys = ["deleteNode"]

  return (
    <ContextMenu
      nodeId={id}
      itemKeys={contextMenuItemKeys}
    >
      <div className="rounded-sm overflow-clip">
        <div 
          style={{ background: color }}
          className="p-1 text-white bg-white"
        >
          {label}
        </div>
        <div className="flex items-center gap-1 p-1 bg-[#101010a8]">
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
        </div>
      </div>
    </ContextMenu>
  )
}