import ContextMenuItem from "./ContextMenuItem"
import { v4 as uuidv4 } from "uuid"
import SubMenu from "./SubMenu"

export default function RenderItems({item, context, menuClass, itemClass}) {

  if (item.type === "submenu") {
    return (
      <SubMenu 
        item={item}
        context={context}
        menuClass={menuClass}
        itemClass={itemClass}
      />
    )
  }

  return (
    <ContextMenuItem 
      key={uuidv4()}
      item={item}
      context={context}
      itemClass={itemClass}
    />
  )
}