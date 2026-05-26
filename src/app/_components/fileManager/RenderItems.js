import ITEMS_MAP from "@/app/_constants/maps/itemsMap"

export default function RenderItems({ itemId, items, layer }) {
  const item = items[itemId]
  const FileComponent = ITEMS_MAP[item.type]

  return (
    <FileComponent 
      itemId={itemId}
      layer={layer}
    />
  )
}