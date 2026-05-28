import * as ContextMenuRadix from "@radix-ui/react-context-menu"
import { v4 as uuidv4 } from "uuid"
import CONTEXT_MENU_ITEMS from "@/app/_constants/contextMenuItems"
import useGraphEditorStore from "@/store/useGraphEditorStore"
import RenderItems from "./items/RenderItems"

export default function ContextMenu({ children, itemId, nodeId, itemKeys, onOpenChange }) {
  const { clientPos } = useGraphEditorStore()

  const menuClass = "p-1 rounded-sm bg-black text-white text-sm border border-primary-500"
  const itemClass = "p-1 rounded-sm outline-none hover:bg-primary-600 cursor-pointer"

  const context = {
    itemId,
    nodeId,
    clientPos,
  }

  return (
    <ContextMenuRadix.Root
      onOpenChange={onOpenChange}
    >
      <ContextMenuRadix.Trigger
        className="group"
      >
        {children}
      </ContextMenuRadix.Trigger>

      <ContextMenuRadix.Portal>
        <ContextMenuRadix.Content
          className={menuClass}
        >
          {itemKeys?.map((itemKey) => (
            <RenderItems
              key={uuidv4()}
              item={CONTEXT_MENU_ITEMS[itemKey]}
              context={context}
              menuClass={menuClass}
              itemClass={itemClass}
            />
          ))}
        </ContextMenuRadix.Content>
      </ContextMenuRadix.Portal>
    </ContextMenuRadix.Root>
  )
}