import ContextMenu from "@/app/_components/contextMenu/ContextMenu"

export default function SidebarSection({ children, label, contextMenuOptionsKeys, onClick, onDragOver, onDrop }) {
  return (
    <ContextMenu
      itemKeys={contextMenuOptionsKeys}
    >
      <div 
        className={`flex flex-col text-sm text-secondary-500`}
        onClick={onClick}
        onDragOver={onDragOver}
        onDrop={onDrop}
      > 
        <div 
          className="flex items-center gap-1.5 px-2 py-1 border-b border-primary-600 font-bold uppercase"
        >
          {label}
        </div>

        {children}
      </div>
    </ContextMenu>
  )
}