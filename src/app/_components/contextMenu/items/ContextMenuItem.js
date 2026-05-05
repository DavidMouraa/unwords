import * as ContextMenuRadix from "@radix-ui/react-context-menu"

export default function ContextMenuItem({ item, context }) {
  return (
    <ContextMenuRadix.Item
      className="p-1 rounded-sm outline-none hover:bg-primary-600 cursor-pointer"
      onClick={(event) => item.action(event, context)}
    >
      {item.label}
    </ContextMenuRadix.Item>
  )
}