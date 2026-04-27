import * as ContextMenuRadix from "@radix-ui/react-context-menu"
import { v4 as uuidv4 } from "uuid"
import CONTEXT_MENU_ITEMS from "@/app/_constants/contextMenuItems"
import Item from "./items/Item"
import useGraphEditorStore from "@/store/useGraphEditorStore"

export default function ContextMenu({ children, itemId, nodeId, itemKeys }) {
  const { clientPos } = useGraphEditorStore()

  const context = {
    itemId,
    nodeId,
    clientPos,
  }

  return (
    <ContextMenuRadix.Root>
      <ContextMenuRadix.Trigger>
        {children}
      </ContextMenuRadix.Trigger>

      <ContextMenuRadix.Portal>
        <ContextMenuRadix.Content
          className="p-2 rounded-sm bg-[#070707] text-white"
        >
          {itemKeys?.map((itemKey) => (
            <Item
              key={uuidv4()}
              item={CONTEXT_MENU_ITEMS[itemKey]}
              context={context}
            />
          ))}
        </ContextMenuRadix.Content>
      </ContextMenuRadix.Portal>
    </ContextMenuRadix.Root>
  )
}