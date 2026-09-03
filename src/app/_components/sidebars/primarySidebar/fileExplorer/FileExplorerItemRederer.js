import FILE_MANAGER_ITEMS_MAP from "@/app/_constants/maps/fileManagerItemsMap"

export default function FileExplorerItemRenderer({ item, layer }) {
  const ItemComponent = FILE_MANAGER_ITEMS_MAP[item.type]

  return (
    <ItemComponent 
      item={item}
      layer={layer}
    />
  )
}