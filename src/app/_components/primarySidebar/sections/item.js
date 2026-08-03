import ContextMenu from "../../contextMenu/ContextMenu"

export default function Item({ 
  className,
  item,
  Icon,
  contextMenuOptionsKeys,
  draggable,
  onClick,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  layer,
}) {
  const indentGuides = Array.from({ length: layer })

  return (
    <ContextMenu
      itemId={item.id}
      itemKeys={contextMenuOptionsKeys}
    >
      <div 
        className={`flex h-7 pl-2 hover:bg-primary-600 ${className} hover:text-white cursor-pointer`}
        draggable={draggable}
        onClick={onClick}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
      >
        {indentGuides.map((_, index) => (
          <div 
            key={index}
            className={`h-full border-l w-2 ml-1 border-primary-300`}
          />
        ))}
        <div className="flex items-center gap-1">
          <Icon />
          {item.data.label}
        </div>
      </div>
    </ContextMenu>
  )
}