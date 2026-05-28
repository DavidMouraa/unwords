import * as ContextMenuRadix from "@radix-ui/react-context-menu"
import RenderItems from "./RenderItems"
import CONTEXT_MENU_ITEMS from "@/app/_constants/contextMenuItems"
import { v4 as uuidv4 } from "uuid"
import { FaChevronRight } from "react-icons/fa6"

export default function SubMenu({ item, context, menuClass, itemClass }) {

  return (
    <ContextMenuRadix.Sub>
      <ContextMenuRadix.SubTrigger
        className={`flex items-center gap-2 ${itemClass}`}
      >
        {item.label}
        <FaChevronRight className="text-secondary-500" />
      </ContextMenuRadix.SubTrigger>

      <ContextMenuRadix.Portal>
        <ContextMenuRadix.SubContent
          className={menuClass}
        >
          {item.subItemsKeys.map((subItemKey, index) => (
            <RenderItems 
              key={uuidv4()}
              item={CONTEXT_MENU_ITEMS[subItemKey]}
              context={context}
            />
          ))}
        </ContextMenuRadix.SubContent>
      </ContextMenuRadix.Portal>
    </ContextMenuRadix.Sub>
  )
}